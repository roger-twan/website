import type { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ReactElement } from 'react'
import { Divider, Tag, Text } from '@geist-ui/core'
import Layout from '@/components/layout'
import CommonHeader from '@/components/common-header'
import { PageWithLayout } from '../_app.page'
import { getPosts } from './posts.data'
import style from './posts.module.scss'
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
import rehypeHighlight from 'rehype-highlight'
import remarkWikiLink from 'remark-wiki-link'
import 'highlight.js/styles/default.css'

interface Props {
  content: MDXRemoteSerializeResult
  description: string
  category: string
  title: string
  tags: string[]
  postToc: any
  date: string
  startDate?: string
  endDate?: string
  rating?: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPosts()
  const paths = postList.map((post) => ({ params: { posts: post.id } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (content) => {
  const postList = await getPosts()
  const post = postList.find((post) => post.id === content.params?.post)
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
      category: post?.category || '',
      description: post?.description || '',
      tags: post?.tags || [],
      content: ctx,
      date: post?.date || '',
      startDate: post?.startDate || '',
      endDate: post?.endDate || '',
      rating: post?.rating || '',
      postToc,
    },
  }
}

const hasToc = (toc: any) => !!toc.children[0].children.length

const renderTOC = (tocItem: any) => {
  switch (tocItem.tagName) {
    case 'nav':
      return (
        <nav {...tocItem.properties}>
          {tocItem.children.map((item: any) => renderTOC(item))}
        </nav>
      )
    case 'ol':
      return (
        <ul key={Math.random()} {...tocItem.properties}>
          {tocItem.children.map((item: any) => renderTOC(item))}
        </ul>
      )
    case 'li':
      return (
        <li
          key={Math.random()}
          className={style['post-toc-item']}
          {...tocItem.properties}
        >
          {tocItem.children.map((item: any) => renderTOC(item))}
        </li>
      )
    case 'a':
      return (
        <a key={Math.random()} {...tocItem.properties}>
          {tocItem.children.map((item: any) => renderTOC(item))}
        </a>
      )
    default:
      return <span key={Math.random()}>{tocItem.value}</span>
  }
}

const PagePost: PageWithLayout<Props> = (prop: Props) => {
  return (
    <div className={`${style['post-page']} ${style['post-page-detail']}`}>
      <CommonHeader
        title={prop.title}
        description={prop.description}
        keywords={prop.tags.join(',')}
      />
      <div className={style['post-page-main']}>
        <Text h1>{prop.title}</Text>
        <div className={style['post-info-tags']}>
          <div>
            <Tag
              style={{ marginRight: '8px', marginBottom: '4px' }}
              type="lite"
            >
              {prop.category}
            </Tag>
            {prop.tags.map((tag: string) => (
              <Tag
                key={tag}
                style={{ marginRight: '8px', marginBottom: '4px' }}
                type="secondary"
              >
                {tag}
              </Tag>
            ))}
            {prop.rating}
          </div>
          <Text type="secondary">
            {prop.startDate &&
              `${format(new Date(prop.startDate!), 'LLL dd, yyyy')} ~ ${format(
                new Date(prop.endDate!),
                'LLL dd, yyyy'
              )}`}
            {!prop.startDate && format(new Date(prop.date), 'LLL dd, yyyy')}
          </Text>
        </div>
        <Divider />
        <div className={style['post-toc']}>
          <Text b>Table of Contents</Text>
          {renderTOC(prop.postToc)}
        </div>
        <MDXRemote {...prop.content} />
      </div>
      {hasToc(prop.postToc) && (
        <div className={style['post-page-side']}>
          <div className={style['post-page-side-content']}>
            <Text b>Table of Contents</Text>
            {renderTOC(prop.postToc)}
          </div>
        </div>
      )}
    </div>
  )
}

PagePost.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default PagePost
