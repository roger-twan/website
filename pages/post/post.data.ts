import { notesReposReq } from '@/utils/octokit'
import metadataParser from 'markdown-yaml-metadata-parser'

interface Post {
  id: string
  title: string
  category: string
  date: string
  description: string
  thumbnail: string
  tags: string[]
  content: string
  startDate: string
  endDate: string
  rating: string
}

interface Folder {
  [key: string]: string
}

const _folders: Folder = {
  '🧐 Technical': 'Technical',
  '😇 General': 'General',
  '📚 Reading': 'Reading',
  '🎬 Life Record': 'Life',
}

let _data: Post[] = []

const _fetchPosts = async () => {
  const result: Post[] = []
  for (const folder of Object.keys(_folders)) {
    const folderData = await notesReposReq('/contents/{path}', {
      path: folder,
    })

    for (const post of folderData.data) {
      const postData = await notesReposReq(
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
          id: _folders[folder] + '__' + post.name.replace('.md', ''),
          title: post.name.replace('.md', ''),
          category: _folders[folder],
          date: String(metadata.date || metadata['start date'] || ''),
          startDate: String(metadata['start date'] || ''),
          endDate: String(metadata['end date'] || ''),
          tags: metadata.tags.map((tag: string) => tag.split('/')[1]) || [],
          thumbnail: thumbnail,
          rating: metadata.rating || '',
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
            .replace('plantuml-svg', 'plantuml'),
        })
      }
    }
  }

  _data = result
}

const getPosts = async () => {
  !_data.length && (await _fetchPosts())

  return _data
}

export { getPosts, type Post }
