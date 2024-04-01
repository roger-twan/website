import { ReactElement, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import Layout from '@/components/layout'
import type { PageWithLayout } from '../_app.page'
import style from './post.module.scss'
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
import { Post, getPosts } from './post.data'

interface TagsCount {
  [tagName: string]: number
}

interface CategoryInfo {
  count: number
  tagsCount: TagsCount
}

interface Categories {
  [categoryName: string]: CategoryInfo
}

interface Props {
  list: Post[]
  categories: Categories
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData: Post[] = await getPosts()
  const categories: Categories = {}

  for (const post of postsData) {
    const { category, tags } = post

    if (!categories[category]) {
      categories[category] = {
        count: 0,
        tagsCount: {},
      }
    }

    for (let tag of tags) {
      if (categories[category].tagsCount[tag]) {
        categories[category].tagsCount[tag] = ++categories[category].tagsCount[
          tag
        ]
      } else {
        categories[category].tagsCount[tag] = 1
      }
    }

    categories[category].count = categories[category].count + 1
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
      const info = selectedTag.split('/')
      result = result.filter(
        (item) => item.category === info[0] && item.tags.includes(info[1])
      )
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
    <div className={`${style['post-page']} ${style['post-page-list']}`}>
      <CommonHeader title="Post List" />
      <div className={style['post-page-main']}>
        <ul>
          {postList.map((item: Post) => {
            return (
              <li key={item.title}>
                <div className={style['post-list-item']}>
                  <div className={style['post-info']}>
                    <Link href={`/post/${item.id}`} target="_blank">
                      <Text h3 className={style['post-title']}>
                        {item.title}
                      </Text>
                    </Link>

                    <Link href={`/post/${item.id}`} target="_blank">
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
                            {tag}
                          </Tag>
                        ))}
                        {item.rating}
                      </div>
                      <Text type="secondary" small>
                        {format(new Date(item.date), 'LLL dd, yyyy')}
                      </Text>
                    </div>
                  </div>
                  {item.thumbnail && (
                    <Link
                      href={`/post/${item.id}`}
                      target="_blank"
                      className={style['thumbnail']}
                    >
                      <Image
                        src={item.thumbnail}
                        width="112px"
                        height="112px"
                      />
                    </Link>
                  )}
                </div>
                <Divider />
              </li>
            )
          })}
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
      <div className={style['post-page-side']}>
        <div className={style['post-page-side-content']}>
          <Tree initialExpand>
            {Object.keys(categories).map((item: string) => (
              <Tree.Folder
                name={item}
                extra={categories[item].count.toString()}
                key={item}
              >
                <Tree.File
                  name="# All"
                  onClick={() => onTagClick(item)}
                  className={
                    selectedCategory === item ? 'category-tag-selected' : ''
                  }
                />
                {Object.keys(categories[item].tagsCount).map((tag: string) => (
                  <Tree.File
                    name={`${tag}`}
                    extra={categories[item].tagsCount[tag].toString()}
                    key={tag}
                    className={
                      selectedTag === `${item}/${tag}`
                        ? 'category-tag-selected'
                        : ''
                    }
                    onClick={() => onTagClick(`${item}/${tag}`)}
                  />
                ))}
              </Tree.Folder>
            ))}
          </Tree>
        </div>
      </div>
    </div>
  )
}

PagePostList.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default PagePostList
