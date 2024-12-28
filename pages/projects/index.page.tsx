import { ReactElement } from 'react'
import Image from 'next/image'
import Layout from '@/components/layout'
import projectList, { ProjectInfo, Link } from './projects.data'
import RandomBgContainer from '@/components/random-bg-container'
import FigmaIcon from '@/public/icons/figma.svg'
import GitHubIcon from '@/public/icons/github.svg'
import LiveIcon from '@/public/icons/live.svg'
import BlogIcon from '@/public/icons/blog.svg'

interface SVGS {
  [key: string]: JSX.Element
}
const SVG_CLASS = 'inline-block w-4 h-4 mr-1'
const SVGs: SVGS = {
  Figma: <FigmaIcon className={SVG_CLASS} />,
  GitHub: <GitHubIcon className={SVG_CLASS} />,
  Live: <LiveIcon className={SVG_CLASS} />,
  Blog: <BlogIcon className={SVG_CLASS} />,
}

const PageProjects = () => {
  return (
    <div>
      <RandomBgContainer className="h-40 sm:h-60">
        <h1 className="text-5xl [text-shadow:_-2px_2px_black] text-white font-orbitron">
          PROJECTS
        </h1>
      </RandomBgContainer>
      <ul className="grid grid-cols-1 gap-4 px-4 mx-auto my-6 max-w-6xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projectList.map((item: ProjectInfo) => (
          <li
            key={item.title}
            className="flex flex-col transition hover:drop-shadow-lg group"
          >
            <div className="relative w-full h-40 rounded-t overflow-hidden">
              <Image
                className="object-cover group-hover:scale-125 transition data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-200"
                src={item.img}
                alt={item.title}
                fill
                data-loaded="false"
                onLoad={(e) =>
                  e.currentTarget.setAttribute('data-loaded', 'true')
                }
              />
            </div>
            <div className="flex flex-1 flex-col bg-gray-100 rounded-b p-2">
              <h2 className="block font-bold">{item.title}</h2>
              <div className="mt-1.5 flex flex-wrap">
                {item.techStacks.map((tech: string) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-200 py-0.5 px-2 text-xs mb-1 mr-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="flex-1 my-2 text-sm text-gray-500">
                {item.description}
              </p>
              <div className="flex">
                {item.links.map((item: Link) => (
                  <a
                    className="inline-flex items-center mt-2 mr-1 py-1 px-2 rounded-full border bg-white text-sm hover:bg-gray-200 transition"
                    target="_blank"
                    href={item.url}
                    rel="noreferrer"
                    key={item.type}
                  >
                    {SVGs[item.type]}
                    {item.type}
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
        <li className="flex flex-col justify-center min-h-40 items-center rounded bg-gray-100 text-gray-400 transition hover:drop-shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            />
          </svg>
          <p className="mt-3 pl-1">Developing...</p>
        </li>
      </ul>
    </div>
  )
}

PageProjects.getLayout = (page: ReactElement) => {
  return <Layout title="Projects">{page}</Layout>
}

export default PageProjects
