import { ReactElement, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import Layout from '@/components/layout'
import type { PageWithLayout } from '../_app.page'
import { notesReposReq } from '@/utils/octokit'
import metadataParser from 'markdown-yaml-metadata-parser'
import style from './post-list.module.scss'
import {
  Text,
  Image,
  Divider,
  Link,
  Tag,
  Tree,
  Pagination,
} from '@geist-ui/core'
import { compareAsc, format } from 'date-fns'
import CommonHeader from '@/components/common-header'
import { ChevronLeft, ChevronRight } from '@geist-ui/icons'

interface Post {
  title: string
  path: string
  category: string
  date: string
  description: string
  thumbnail: string
  tags: string[]
}

interface Tags {
  [propName: string]: number
}

interface Category {
  path: string
  alias: string
  count: number
  tags: Tags
}

interface Props {
  list: Post[]
  categories: Category[]
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData: Post[] = []
  const categories: Category[] = [
    {
      path: '🧐 Technical',
      alias: 'Technical',
      count: 0,
      tags: {},
    },
    {
      path: '😇 General',
      alias: 'General',
      count: 0,
      tags: {},
    },
    {
      path: '📚 Reading',
      alias: 'Reading',
      count: 0,
      tags: {},
    },
    {
      path: '🎬 Life Record',
      alias: 'Life',
      count: 0,
      tags: {},
    },
  ]

  for (const category of categories) {
    let count = 0
    const tags: Tags = {}

    const categoryData = await notesReposReq('/contents/{path}', {
      path: category.path,
    })
    const postList = categoryData.data

    for (const post of postList) {
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
        count++
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

        postsData.push({
          title: post.name.replace('.md', ''),
          path: post.path,
          category: category.alias,
          date: String(metadata.date || metadata['start date'] || ''),
          tags: metadata.tags || [],
          thumbnail: thumbnail,
          description: content
            .replace(/<[^>]+>/g, '') // remove html
            .replace(/!\[.*\]\((.*)\)/g, '') // remove image
            .replace(/\[.*\]\((.*)\)/g, '') // remove link
            .replace(/#{1,6}/g, '') // remove heading
            .replace(/(\*\*|__)[^\*\*]+(\*\*|__)/g, '') // remove bold
            .replace(/(\*|_)[^\*\_]+(\*|_)/g, '') // remove italic
            .replace(/```[\s\S]+?```/g, '') // remove code
            .trim()
            .slice(0, 300),
        })

        if (metadata.tags) {
          for (let tag of metadata.tags) {
            tag = tag.split('/')[1]
            if (tags[tag]) {
              tags[tag] = ++tags[tag]
            } else {
              tags[tag] = 1
            }
          }
        }
      }
    }

    categories.splice(categories.indexOf(category), 1, {
      ...category,
      count,
      tags,
    })
  }

  return { props: { list: postsData, categories } }
}

const PagePostList: PageWithLayout<Props> = ({ list, categories }: Props) => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [total, setTotal] = useState(0)
  const [selectedTag, setSelectedTag] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [postList, setPostList] = useState<Post[]>([])

  const setList = () => {
    let result = list.sort((a: Post, b: Post) =>
      compareAsc(new Date(b.date), new Date(a.date))
    )

    if (selectedTag) {
      result = result.filter((item) => item.tags.includes(selectedTag))
    } else if (selectedCategory) {
      result = result.filter((item) => item.category === selectedCategory)
    }

    setTotal(result.length)
    setPostList(result.slice((page - 1) * pageSize, page * pageSize))
    window.scrollTo(0, 0)
  }

  const onTagClick = (tag: string) => {
    setPage(1)
    setTotal(0)

    if (tag.indexOf('/') > -1) {
      setSelectedCategory('')
      setSelectedTag(selectedTag === tag ? '' : tag)
    } else {
      setSelectedTag('')
      setSelectedCategory(selectedCategory === tag ? '' : tag)
    }
  }

  useEffect(() => {
    setList()
  }, [list, page, pageSize, selectedTag, selectedCategory])

  return (
    <div className={style['post-list-page']}>
      <CommonHeader title="Post List" />
      <div className={style['post-list-wrapper']}>
        <ul>
          {postList.map((item: Post) => (
            <li key={item.title}>
              <div className={style['post-list-item']}>
                <div className={style['post-info']}>
                  <Link href={`/post/${item.path}`} target="_blank">
                    <Text h3 className={style['post-title']}>
                      {item.title}
                    </Text>
                  </Link>

                  <Link href={`/post/${item.path}`} target="_blank">
                    <Text p className={style['post-description']}>
                      {item.description}
                    </Text>
                  </Link>

                  <div className={style['post-info-tags']}>
                    <div>
                      <Tag
                        style={{ marginRight: '8px' }}
                        type="lite"
                        scale={0.6}
                      >
                        {item.category}
                      </Tag>
                      {item.tags.map((tag: string) => (
                        <Tag
                          key={tag}
                          style={{ marginRight: '8px' }}
                          type="secondary"
                          scale={0.6}
                        >
                          {tag.split('/')[1]}
                        </Tag>
                      ))}
                    </div>
                    <Text type="secondary" small>
                      {format(new Date(item.date), 'LLL dd, yyyy')}
                    </Text>
                  </div>
                </div>
                {item.thumbnail && (
                  <Link
                    href={`/post/${item.path}`}
                    target="_blank"
                    className={style['thumbnail']}
                  >
                    <Image src={item.thumbnail} width="112px" height="112px" />
                  </Link>
                )}
              </div>
              <Divider />
            </li>
          ))}
        </ul>

        <Pagination
          count={Math.ceil(total / pageSize)}
          page={page}
          onChange={(page) => setPage(page)}
          className={style['pagination']}
        >
          <Pagination.Next>
            <ChevronRight />
          </Pagination.Next>
          <Pagination.Previous>
            <ChevronLeft />
          </Pagination.Previous>
        </Pagination>
      </div>
      <div className={style['category-wrapper']}>
        <Tree initialExpand>
          {categories.map((item: Category) => (
            <Tree.Folder
              name={item.alias}
              extra={item.count.toString()}
              key={item.path}
            >
              <Tree.File
                name="# All"
                onClick={() => onTagClick(item.alias)}
                className={
                  selectedCategory === item.alias ? 'category-tag-selected' : ''
                }
              />
              {Object.keys(item.tags).map((tag: string) => (
                <Tree.File
                  name={`${tag}`}
                  extra={item.tags[tag].toString()}
                  key={tag}
                  className={
                    selectedTag === `${item.alias}/${tag}`
                      ? 'category-tag-selected'
                      : ''
                  }
                  onClick={() => onTagClick(`${item.alias}/${tag}`)}
                />
              ))}
            </Tree.Folder>
          ))}
        </Tree>
      </div>
    </div>
  )
}

PagePostList.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default PagePostList
