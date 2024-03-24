import CommonHeader from '@/components/commonHeader'
import Layout from '@/components/layout'
import { ReactElement } from 'react'
import Image from 'next/image'
import projectList, { ProjectInfo } from './projectList.data'
import { Card, Link, Page, Text, Tag } from '@geist-ui/core'
import { Infinity } from '@geist-ui/icons'
import style from './portfolios.module.scss'

const PagePortfolios = () => {
  return (
    <Page>
      <CommonHeader title="Portfolios" />
      <div className={style['project-list']}>
        {projectList.map((item: ProjectInfo) => (
          <Card hoverable className={style['project-card']} key={item.title}>
            <Image
              className={style['project-img']}
              src={item.img}
              alt={item.title}
              placeholder="blur"
            />
            <Card.Content>
              <Text b>{item.title}</Text>
              <br />
              {item.platforms.map((platform: string) => (
                <Tag
                  key={platform}
                  style={{ marginRight: '4px' }}
                  type="lite"
                  scale={0.5}
                >
                  {platform}
                </Tag>
              ))}
              {item.techStacks.map((tech: string) => (
                <Tag
                  key={tech}
                  style={{ marginRight: '4px' }}
                  type="secondary"
                  scale={0.5}
                >
                  {tech}
                </Tag>
              ))}
              <Text className={style['project-description']} p small>
                {item.description}
              </Text>
              <Link
                className={style['project-link']}
                target="_blank"
                href={item.codeSource}
                color
                block
              >
                View Code
              </Link>
            </Card.Content>
          </Card>
        ))}
        <Card className={style['project-card-coming']}>
          <Infinity size={50} color="#999" />
          <Text type="secondary">Developing...</Text>
        </Card>
      </div>
    </Page>
  )
}

PagePortfolios.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PagePortfolios
