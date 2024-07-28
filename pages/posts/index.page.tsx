import { ReactElement, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import Layout from '@/components/layout'
import type { PageWithLayout } from '../_app.page'
import style from './posts.module.scss'
import { compareAsc, format } from 'date-fns'
import CommonHeader from '@/components/common-header'
import { Post, getPosts } from './posts.data'

interface spansCount {
  [tagName: string]: number
}

interface CategoryInfo {
  count: number
  tagsCount: spansCount
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
  const [selectedspan, setSelectedspan] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [postList, setPostList] = useState<Post[]>([])

  const setList = () => {
    let result = list.sort((a: Post, b: Post) =>
      compareAsc(new Date(b.date), new Date(a.date))
    )

    if (selectedspan) {
      const info = selectedspan.split('/')
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

  const onspanClick = (tag: string) => {
    setPage(1)
    setTotal(0)

    if (tag.indexOf('/') > -1) {
      setSelectedCategory('')
      setSelectedspan(selectedspan === tag ? '' : tag)
    } else {
      setSelectedspan('')
      setSelectedCategory(selectedCategory === tag ? '' : tag)
    }
  }

  useEffect(() => {
    setList()
  }, [list, page, pageSize, selectedspan, selectedCategory])

  return (
    <div className={`${style['post-page']} ${style['post-page-list']}`}>
      <CommonHeader title="Posts" />
      <div className={style['post-page-main']}>
        <ul>
          {postList.map((item: Post) => {
            return (
              <li key={item.title}>
                <div className={style['post-list-item']}>
                  <div className={style['post-info']}>
                    <a href={`/posts/${item.id}`} target="_blank" rel="noreferrer">
                      <p className={style['post-title']}>{item.title}</p>
                    </a>

                    <a href={`/posts/${item.id}`} target="_blank" rel="noreferrer">
                      <p className={style['post-description']}>
                        {item.description}
                      </p>
                    </a>

                    <div className={style['post-info-tags']}>
                      <div>
                        <span style={{ marginRight: '8px' }}>
                          {item.category}
                        </span>
                        {item.tags.map((tag: string) => (
                          <span key={tag} style={{ marginRight: '8px' }}>
                            {tag}
                          </span>
                        ))}
                        {item.rating}
                      </div>
                      <p>{format(new Date(item.date), 'LLL dd, yyyy')}</p>
                    </div>
                  </div>
                  {item.thumbnail && (
                    <a
                      href={`/posts/${item.id}`}
                      target="_blank"
                      className={style['thumbnail']} rel="noreferrer"
                    >
                      <img src={item.thumbnail} width="112px" height="112px" />
                    </a>
                  )}
                </div>
                <hr />
              </li>
            )
          })}
        </ul>

        <div className={style['pagination']}>{Math.ceil(total / pageSize)}</div>
      </div>
      <div className={style['post-page-side']}>
        <div className={style['post-page-side-content']}>
          <div>
            {Object.keys(categories).map((item: string) => (
              <div key={item}>
                <div
                  onClick={() => onspanClick(item)}
                  className={
                    selectedCategory === item ? 'category-tag-selected' : ''
                  }
                />
                {Object.keys(categories[item].tagsCount).map((tag: string) => (
                  <div
                    key={tag}
                    className={
                      selectedspan === `${item}/${tag}`
                        ? 'category-tag-selected'
                        : ''
                    }
                    onClick={() => onspanClick(`${item}/${tag}`)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

PagePostList.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default PagePostList
