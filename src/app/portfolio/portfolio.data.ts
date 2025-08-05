import { compareAsc } from 'date-fns';
import metadataParser from 'markdown-yaml-metadata-parser';
import { fetchNotesRepo } from '@/utils/octokit';

export const CategoryObj = {
  Web: {
    name: 'Web Application',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-600',
    backgroundColor: 'bg-yellow-50',
  },
  Mobile: {
    name: 'Mobile App',
    textColor: 'text-green-600',
    borderColor: 'border-green-600',
    backgroundColor: 'bg-green-50',
  },
  Design: {
    name: 'Design Project',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-600',
    backgroundColor: 'bg-purple-50',
  },
  Tool: {
    name: 'Tool',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-600',
    backgroundColor: 'bg-cyan-50',
  },
};
interface Link {
  type: 'GitHub' | 'Figma' | 'Live' | 'Blog';
  url: string;
}
export type Category = keyof typeof CategoryObj;
export interface Portfolio {
  title: string;
  categories: Category[];
  description: string;
  technologies: string[];
  image: string;
  links: Link[];
  date: string;
}

let _data: Portfolio[] = [];

const _fetchPortfolio = async () => {
  const result: Portfolio[] = [];

  const folderData = await fetchNotesRepo('/contents/{path}', {
    path: 'Portfolio',
  });

  for (const portfolio of folderData.data) {
    if (portfolio.name === '_index.md') continue;

    const portfolioData = await fetchNotesRepo(
      '/contents/{path}',
      {
        path: portfolio.path,
      },
      {
        Accept: 'application/vnd.github.v3.raw',
      },
    );

    const { content, metadata } = metadataParser(portfolioData.data);

    if (metadata) {
      const image = content.match(/!\[.*\]\((.*)\)/)?.[1] || '';
      const title = portfolio.name.replace('.md', '');
      const links: Link[] = [];

      if (metadata['github-link']) {
        links.push({
          type: 'GitHub',
          url: metadata['github-link'],
        });
      }

      if (metadata['blog-link']) {
        links.push({
          type: 'Blog',
          url: metadata['blog-link'],
        });
      }

      if (metadata['figma-link']) {
        links.push({
          type: 'Figma',
          url: metadata['figma-link'],
        });
      }

      if (metadata['live-link']) {
        links.push({
          type: 'Live',
          url: metadata['live-link'],
        });
      }

      result.push({
        title: title,
        image: image,
        categories: metadata.categories || [],
        description: metadata.description || '',
        technologies: metadata.technologies || [],
        links: links,
        date: metadata.date || '',
      });
    }
  }

  _data = result.sort((a: Portfolio, b: Portfolio) =>
    compareAsc(new Date(b.date), new Date(a.date)),
  );
};

const getPortfolio = async () => {
  !_data.length && (await _fetchPortfolio());

  return _data;
};

export default getPortfolio;
