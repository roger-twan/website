import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import simplePlantUML from '@akebifiky/remark-simple-plantuml';
import rehypeSlug from 'rehype-slug';
import rehypeVideoPlugin from './rehype-video-plugin';
import rehypeMathjax from 'rehype-mathjax';
import rehypeHighlight from 'rehype-highlight';
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeExternalLinks from 'rehype-external-links';
import remarkWikiLink from 'remark-wiki-link';
import { Pluggable } from 'unified';

export default async function md2html(md: string) {
  let toc: string = '';

  const content: MDXRemoteSerializeResult = await serialize(md || '', {
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
            customizeTOC: (tableOfContents: any) => {
              toc = tableOfContents;
              return false;
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
  });

  return {
    content,
    toc,
  };
}
