import { notesRepoReq } from '@/utils/octokit'
import metadataParser from 'markdown-yaml-metadata-parser'

export interface Post {
  id: string
  title: string
  date: string
  description: string
  thumbnail: string
  tags: string[]
  content: string
  path: string
}

let _data: Post[] = []

const _fetchPosts = async () => {
  const result: Post[] = []

  const folderData = await notesRepoReq('/contents/{path}', {
    path: 'Technical',
  })

  for (const post of folderData.data) {
    const postData = await notesRepoReq(
      '/contents/{path}',
      {
        path: post.path,
      },
      {
        Accept: 'application/vnd.github.v3.raw',
      }
    )

    const { content, metadata } = metadataParser(postData.data)

    if (metadata && metadata.publish) {
      let thumbnail = content.match(/!\[.*\]\((.*)\)/)?.[1] || ''
      const title = post.name.replace('.md', '')

      if (thumbnail) {
        // youtube
        if (thumbnail.indexOf('youtu.be') > -1) {
          thumbnail =
            thumbnail.replace('youtu.be', 'i.ytimg.com/vi') +
            '/maxresdefault.jpg'
        }
        // mp4
        if (
          thumbnail.split('.').length &&
          thumbnail.split('.').pop() === 'mp4'
        ) {
          thumbnail = ''
        }
      }

      result.push({
        id: title,
        title: title,
        thumbnail: thumbnail,
        path: '/blog/' + title,
        date: String(metadata.date || ''),
        tags: metadata.tags.map((tag: string) => tag.split('/')[1]) || [],
        description: content
          .replace(/<[^>]+>/g, '') // remove html
          .replace(/!\[.*\]\((.*)\)/g, '') // remove image
          .replace(/\[.*\]\((.*)\)/g, '') // remove link
          .replace(/#{1,6}/g, '') // remove heading
          .replace(/(\*\*|__)[^\*\*]+(\*\*|__)/g, '') // remove bold
          .replace(/(\*|_)[^\*\_]+(\*|_)/g, '') // remove italic
          .replace(/```[\s\S]+?```/g, '') // remove code
          .replace(/\n+/g, ' ') // remove newline
          .trim()
          .slice(0, 300),
        content: content
          .replace(/\$(\S[^\$\n]+\S)\$/g, '$$$$$1$$$') // replace math expression
          .replaceAll('plantuml-svg', 'plantuml'),
      })
    }
  }

  _data = result
}

const getPosts = async () => {
  !_data.length && (await _fetchPosts())

  return _data
}

export default getPosts
