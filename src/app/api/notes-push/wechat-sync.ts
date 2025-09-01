import { fetchNotesRepo } from '@/utils/octokit';
import metadataParser from 'markdown-yaml-metadata-parser';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const WECHAT_API_AGENT_HOST = 'https://wechat.roger.ink';
let _accessToken: string | null = null;

const _fetchAccessToken = async () => {
  if (_accessToken) return _accessToken;

  try {
    const response = await fetch(
      `${WECHAT_API_AGENT_HOST}/cgi-bin/token?grant_type=client_credential&appid=${process.env.WECHAT_APP_ID}&secret=${process.env.WECHAT_APP_SECRET}`,
    );
    const data = await response.json();

    if (!data.access_token) {
      throw new Error('Failed to fetch access token: ' + data);
    }

    _accessToken = data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
};

const _uploadImage = async (url: string) => {
  const img = await fetch(url);
  const buffer = await img.arrayBuffer();
  const file = new File([buffer], 'image.jpg');
  const formData = new FormData();
  formData.append('media', file);

  try {
    const response = await fetch(
      `${WECHAT_API_AGENT_HOST}/cgi-bin/media/uploadimg?access_token=${_accessToken}`,
      {
        method: 'POST',
        body: formData,
      },
    );
    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

const _uploadThumbnail = async (content: string) => {
  const regex = /!\[title\]\(([^)]+)\)/;
  const match = content.match(regex);

  if (!match) return null;

  const img = await fetch(match[1]);
  const buffer = await img.arrayBuffer();
  const file = new File([buffer], 'image.jpg');
  const formData = new FormData();
  formData.append('media', file);

  try {
    const response = await fetch(
      `${WECHAT_API_AGENT_HOST}/cgi-bin/material/add_material?access_token=${_accessToken}&type=thumb`,
      {
        method: 'POST',
        body: formData,
      },
    );
    const data = await response.json();
    return data.media_id;
  } catch (error) {
    console.error('Error uploading thumbnail:', error);
    return null;
  }
};

const _replaceImages = async (content: string) => {
  const regex = /!\[([^\]]*)]\(([^)]+)\)/g;
  const matches = [...content.matchAll(regex)];

  if (!matches.length) return content;

  for (const match of matches) {
    const fullMatch = match[0];
    const altText = match[1];
    const url = match[2];

    const newUrl = await _uploadImage(url);
    content = content.replace(fullMatch, `![${altText}](${newUrl})`);
  }

  return content;
};

const _convertToHtml = async (content: string) => {
  const result = await remark().use(remarkHtml).process(content);
  return result.toString();
};

const _addDrafts = async (
  articles: {
    title: string;
    content: string;
    thumb_media_id: string;
    need_open_comment: number;
  }[],
) => {
  try {
    await fetch(
      `${WECHAT_API_AGENT_HOST}/cgi-bin/draft/add?access_token=${_accessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articles,
        }),
      },
    );
  } catch (error) {
    console.error('Error adding draft:', error);
  }
};

export default async function wechatSync(files: string[]) {
  const articles = [];

  for (const file of files) {
    const postData = await fetchNotesRepo(
      '/contents/{path}',
      {
        path: file,
      },
      {
        Accept: 'application/vnd.github.v3.raw',
      },
    );

    const { content, metadata } = metadataParser(postData.data);

    if (metadata && metadata.publish) {
      await _fetchAccessToken();

      const title = file.replace('.md', '').split('/').pop()!;
      const newContent = await _replaceImages(content);
      const thumbnailId = await _uploadThumbnail(newContent);
      articles.push({
        title,
        content: await _convertToHtml(newContent),
        thumb_media_id: thumbnailId,
        need_open_comment: 1,
      });
    }
  }

  await _addDrafts(articles);
}
