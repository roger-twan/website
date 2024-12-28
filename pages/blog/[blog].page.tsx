import type { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ReactElement, useState } from 'react'
import Layout from '@/components/layout'
import { PageWithLayout } from '../_app.page'
import getPosts, { Post } from './blog.data'
import { format } from 'date-fns'
import { Pluggable } from 'unified'
import rehypeSlug from 'rehype-slug'
import rehypeToc from '@jsdevtools/rehype-toc'
import rehypeExternalLinks from 'rehype-external-links'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import rehypeVideoPlugin from '@/utils/rehype-video-plugin'
import simplePlantUML from '@akebifiky/remark-simple-plantuml'
import remarkWikiLink from 'remark-wiki-link'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark-dimmed.css'
import RandomBgContainer from '@/components/random-bg-container'
import BackList from './back-list'
import Drawer from '@/components/drawer'
import UpDownIcon from '@/public/icons/up-down.svg'

interface PagePostProps extends Omit<Post, 'content'> {
  content: MDXRemoteSerializeResult
  postToc: any
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPosts()
  const paths = postList.map((post) => ({ params: { blog: post.id } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (content) => {
  const postList = await getPosts()
  const post = postList.find((post) => post.id === content.params?.blog)
  let postToc

  const ctx = await serialize(post?.content || '', {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        [
          remarkMath,
          {
            singleDollarTextMath: false,
          },
        ],
        [
          simplePlantUML,
          {
            baseUrl: 'https://www.plantuml.com/plantuml/svg',
          },
        ],
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeVideoPlugin,
        rehypeMathjax as Pluggable,
        rehypeHighlight as Pluggable,
        [
          rehypeToc,
          {
            customizeTOC: (toc: any) => {
              postToc = toc
              return false
            },
          },
        ],
        [
          rehypeExternalLinks,
          {
            target: '_blank',
          },
        ],
        [
          remarkWikiLink,
          {
            pageResolver: (name: string) => [
              name.replace('.', '').replace(/ /g, '-').toLowerCase(),
            ],
            hrefTemplate: (href: string) => href,
          },
        ],
      ],
    },
  })

  return {
    props: {
      title: post?.title || '',
      description: post?.description || '',
      tags: post?.tags || [],
      content: ctx,
      date: post?.date || '',
      postToc,
    },
  }
}

const hasToc = (toc: any) => !!toc.children[0].children.length

const renderTOC = (
  tocItem: any,
  isDrawer: boolean = false,
  cb?: () => void
) => {
  switch (tocItem.tagName) {
    case 'nav':
      return (
        <nav className="-ml-4 -mt-2 leading-tight">
          {tocItem.children.map((item: any) => renderTOC(item, isDrawer, cb))}
        </nav>
      )
    case 'ol':
      return (
        <ul className="ml-4" key={Math.random()}>
          {tocItem.children.map((item: any) => renderTOC(item, isDrawer, cb))}
        </ul>
      )
    case 'li':
      return (
        <li key={Math.random()} className="mt-2">
          {tocItem.children.map((item: any) => renderTOC(item, isDrawer, cb))}
        </li>
      )
    case 'a':
      return (
        <a key={Math.random()} {...tocItem.properties} onClick={() => cb?.()}>
          {tocItem.children.map((item: any) => renderTOC(item, isDrawer, cb))}
        </a>
      )
    default:
      return (
        <span
          key={Math.random()}
          className="inline-block transition transform hover:translate-x-1"
        >
          {tocItem.value}
        </span>
      )
  }
}

const PagePost: PageWithLayout<PagePostProps> = (props: PagePostProps) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <RandomBgContainer className="py-4 px-12 md:py-16">
        <h1 className="text-xl text-center leading-tight [text-shadow:_-1px_1px_white] text-black font-orbitron md:text-3xl md:leading-normal md:[text-shadow:_-2px_2px_white]">
          {props.title}
        </h1>
        <div className="mt-2">
          {props.tags.map((tag: string) => (
            <span
              className="rounded-full bg-gray-200 py-1 px-2 text-xs mr-1"
              key={tag}
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-700">
          {format(new Date(props.date), 'LLL dd, yyyy')}
        </p>
        <button
          className="flex items-center mt-2 bg-white py-0.5 pl-2 pr-1 rounded-xl border text-xs sm:hidden"
          onClick={() => setOpenDrawer(true)}
        >
          Table of Contents
          <UpDownIcon className="ml-1 size-3" />
        </button>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          {renderTOC(props.postToc, true, () => setOpenDrawer(false))}
        </Drawer>
      </RandomBgContainer>

      <BackList />

      <div className="flex px-4 justify-center">
        <article className="my-4 max-w-[600px] lg:max-w-[700px] overflow-hidden prose prose-img:m-0 prose-table:block prose-table:overflow-x-auto prose-svg:overflow-x-auto">
          <MDXRemote {...props.content} />
        </article>
        {hasToc(props.postToc) && (
          <aside className="hidden border-l ml-10 pl-6 mt-4 opacity-30 sm:block transition duration-500 delay-1000 text-sm min-w-52 max-w-80 hover:opacity-100 hover:delay-0">
            <div className="sticky top-2 h-screen overflow-y-auto">
              {renderTOC(props.postToc)}
            </div>
          </aside>
        )}
      </div>
    </>
  )
}

PagePost.getLayout = (page: ReactElement, pageProps) => (
  <Layout title={pageProps.title}>{page}</Layout>
)

export default PagePost
