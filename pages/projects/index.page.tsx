import Layout from '@/components/layout'
import { ReactElement } from 'react'
import Image from 'next/image'
import projectList, { ProjectInfo } from './projects.data'
import style from './portfolio.module.scss'

const PageProjects = () => {
  return (
    <div>
      <div className={style['project-list']}>
        {projectList.map((item: ProjectInfo) => (
          <div className={style['project-card']} key={item.title}>
            <Image
              className={style['project-img']}
              src={item.img}
              alt={item.title}
              placeholder="blur"
            />
            <div>
              <p>{item.title}</p>
              <br />
              {item.platforms.map((platform: string) => (
                <span key={platform} style={{ marginRight: '4px' }}>
                  {platform}
                </span>
              ))}
              {item.techStacks.map((tech: string) => (
                <span key={tech} style={{ marginRight: '4px' }}>
                  {tech}
                </span>
              ))}
              <p className={style['project-description']}>{item.description}</p>
              <a
                className={style['project-link']}
                target="_blank"
                href={item.codeSource}
                rel="noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
        <div className={style['project-card-coming']}>
          <p>Developing...</p>
        </div>
      </div>
    </div>
  )
}

PageProjects.getLayout = (page: ReactElement) => {
  return <Layout title="Portfolio">{page}</Layout>
}

export default PageProjects
