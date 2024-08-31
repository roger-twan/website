import { ReactElement, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { compareAsc, format } from 'date-fns'
import Layout from '@/components/layout'
import { PageWithLayout } from '../_app.page'
import getPosts, { Post } from './blog.data'
import Image from 'next/image'
import RandomBgContainer from '@/components/random-bg-container'
import Pagination from '@/components/pagination'
import TagDrawer from './tag-drawer'
import TagSide from './tag-side'
import { useRouter } from 'next/router'
import Mask from '@/components/mask'

export interface Tags {
  [tagName: string]: number
}

interface PageBlogProps {
  list: Post[]
  tags: Tags
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData: Post[] = await getPosts()
  const allTags: Tags = {}

  for (const post of postsData) {
    for (const tag of post.tags) {
      if (allTags[tag]) {
        allTags[tag] = ++allTags[tag]
      } else {
        allTags[tag] = 1
      }
    }
  }

  const sortedTags = Object.keys(allTags).sort((a: string, b: string) => {
    if (allTags[b] !== allTags[a]) {
      return allTags[b] - allTags[a]
    } else {
      return a.localeCompare(b)
    }
  })
  let tags: Tags = {}

  for (const tag of sortedTags) {
    tags[tag] = allTags[tag]
  }

  return { props: { list: postsData, tags: tags } }
}

const PageBlog: PageWithLayout<PageBlogProps> = (props: PageBlogProps) => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [total, setTotal] = useState(0)
  const [selectedTag, setSelectedTag] = useState('')
  const [postList, setPostList] = useState<Post[]>([])
  const [openDrawer, setOpenDrawer] = useState(false)
  const [postClickPosition, setPostClickPosition] = useState<[number, number]>([
    0, 0,
  ])
  const [maskFullScreen, setMaskFullScreen] = useState(false)
  const [showMask, setShowMask] = useState(false)
  const router = useRouter()

  const setList = () => {
    let result = props.list.sort((a: Post, b: Post) =>
      compareAsc(new Date(b.date), new Date(a.date))
    )

    if (selectedTag) {
      result = result.filter((item) => item.tags.includes(selectedTag))
    }

    setTotal(result.length)
    setPostList(result.slice((page - 1) * pageSize, page * pageSize))
    window.scrollTo(0, 0)
  }

  const onTagClick = (tag: string) => {
    setPage(1)
    setTotal(0)

    setSelectedTag(selectedTag === tag ? '' : tag)
  }

  const onPostClick = (e: React.MouseEvent, path: string) => {
    setPostClickPosition([e.clientX, e.clientY])
    setShowMask(true)
    setMaskFullScreen(true)
    setTimeout(() => router.push(path), 100)
    setTimeout(() => setShowMask(false), 500)
  }

  useEffect(() => setList(), [props.list, page, pageSize, selectedTag])

  return (
    <>
      <RandomBgContainer className="h-40 sm:h-60">
        <h1 className="text-5xl [text-shadow:_-2px_2px_black] text-white font-orbitron">
          BLOG
        </h1>
        <button
          className="flex items-center mt-1 bg-white py-0.5 pl-2 pr-1 rounded-xl border text-xs sm:hidden"
          onClick={() => setOpenDrawer(true)}
        >
          #{selectedTag ? `${selectedTag}` : 'All'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </button>
        <TagDrawer
          isOpen={openDrawer}
          tags={props.tags}
          currentTag={selectedTag}
          total={props.list.length}
          onClose={() => setOpenDrawer(false)}
          onTagClick={(v) => {
            setOpenDrawer(false), onTagClick(v)
          }}
        />
      </RandomBgContainer>
      <Mask
        show={showMask}
        position={postClickPosition}
        fullScreen={maskFullScreen}
      />
      <div className="flex px-4 justify-center">
        <div className="max-w-[600px] lg:max-w-[700px]">
          <ul>
            {postList.map((item: Post) => {
              return (
                <li
                  className="flex flex-col my-4 transition hover:drop-shadow-lg md:flex-row-reverse md:my-6"
                  key={item.title}
                >
                  {item.thumbnail && (
                    <div className="relative w-full h-40 md:h-auto md:w-40">
                      <Image
                        className="object-cover rounded-t md:rounded-tl-none md:rounded-r data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-200"
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        data-loaded="false"
                        onLoad={(e) =>
                          e.currentTarget.setAttribute('data-loaded', 'true')
                        }
                      />
                    </div>
                  )}
                  <div
                    className={`bg-gray-100 rounded-b p-2 ${
                      item.thumbnail ? 'md:rounded-r-none' : 'rounded-t'
                    } md:flex-1 md:p-4`}
                  >
                    <h2
                      className="block font-bold cursor-pointer"
                      onClick={(e) => onPostClick(e, item.path)}
                    >
                      {item.title}
                    </h2>

                    <p
                      className="mt-2 mb-3 text-sm text-gray-500 text-ellipsis line-clamp-3 cursor-pointer"
                      onClick={(e) => onPostClick(e, item.path)}
                    >
                      {item.description}
                    </p>

                    <div className="flex justify-between text-sm text-gray-700">
                      <div>
                        {item.tags.map((tag: string) => (
                          <button
                            className="rounded-full bg-gray-200 py-1 px-2 text-xs mr-1 cursor-pointer enabled:hover:bg-gray-300 disabled:cursor-not-allowed"
                            key={tag}
                            onClick={() => onTagClick(tag)}
                            disabled={selectedTag === tag}
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                      <span>{format(new Date(item.date), 'LLL dd, yyyy')}</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <Pagination
            className="mb-5"
            page={page}
            total={total}
            pageSize={pageSize}
            onChange={setPage}
          />
        </div>

        <TagSide
          className="hidden sm:block"
          tags={props.tags}
          currentTag={selectedTag}
          total={props.list.length}
          onTagClick={onTagClick}
        />
      </div>
    </>
  )
}

PageBlog.getLayout = (page: ReactElement) => (
  <Layout title="Blog">{page}</Layout>
)

export default PageBlog
