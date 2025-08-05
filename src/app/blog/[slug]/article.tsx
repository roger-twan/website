'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface ArticleProps {
  content: MDXRemoteSerializeResult;
}

export default function Article({ content }: ArticleProps) {
  return (
    <article className="overflow-hidden prose prose-lg prose-img:m-0 prose-table:block prose-table:overflow-x-auto prose-svg:overflow-x-auto">
      <MDXRemote {...content} />
    </article>
  );
}
