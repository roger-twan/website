import { SerializeOptions } from 'next-mdx-remote-client/serialize';
import { evaluate } from 'next-mdx-remote-client/rsc';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import simplePlantUML from '@akebifiky/remark-simple-plantuml';
import rehypeSlug from 'rehype-slug';
import rehypeVideoPlugin from './rehype-video-plugin';
import rehypeMathjax from 'rehype-mathjax';
import rehypeHighlight from 'rehype-highlight';
import rehypeExternalLinks from 'rehype-external-links';
import remarkWikiLink from 'remark-wiki-link';
import { Pluggable } from 'unified';
import rehypeToc from '@jsdevtools/rehype-toc';

export const options: SerializeOptions = {
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
};

export const getToc = async (content: string) => {
  let toc: any;

  await evaluate({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: options.mdxOptions?.remarkPlugins || [],
        rehypePlugins: [
          ...(options.mdxOptions?.rehypePlugins || []),
          [
            rehypeToc,
            {
              customizeTOC: (tableOfContents: any) => {
                toc = tableOfContents;
                return false;
              },
            },
          ],
        ],
      },
    },
  });

  return toc;
};
