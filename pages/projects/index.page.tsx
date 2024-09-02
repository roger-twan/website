import { ReactElement } from 'react'
import Image from 'next/image'
import Layout from '@/components/layout'
import projectList, { ProjectInfo } from './projects.data'
import RandomBgContainer from '@/components/random-bg-container'

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
              <h2 className="block font-bold cursor-pointer">{item.title}</h2>
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
              <p className="flex-1 my-2 text-sm text-gray-500 text-ellipsis line-clamp-3">
                {item.description}
              </p>
              <div>
                <a
                  className="inline-flex items-center mt-2 py-1 px-2 rounded-full border bg-white text-sm hover:bg-gray-200 transition"
                  target="_blank"
                  href={item.codeSource}
                  rel="noreferrer"
                >
                  <svg
                    className="inline-block w-4 h-4 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
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
