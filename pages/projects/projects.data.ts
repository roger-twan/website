import { StaticImageData } from 'next/image'
import picMusic from '@/public/projects/music.jpeg'
import picIELTS from '@/public/projects/ielts.jpeg'
import picLauncher from '@/public/projects/plain_launcher.jpeg'
import picTwan from '@/public/projects/twan.jpeg'
import picObsidianR2 from '@/public/projects/obsidian-r2.jpeg'
import picRecruitment from '@/public/projects/recruitment.jpeg'
import picStudio from '@/public/projects/roger_studio.jpeg'
import picImageJoiner from '@/public/projects/image-joiner.jpeg'
import picSimpleApi from '@/public/projects/simple-api.jpeg'
import picSSO from '@/public/projects/sso.jpeg'

export interface Link {
  type: string
  url: string
}
export interface ProjectInfo {
  title: string
  img: StaticImageData
  techStacks: string[]
  description: string
  links: Link[]
}

const projectList: ProjectInfo[] = [
  {
    title: 'SSO',
    img: picSSO,
    techStacks: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Redis',
      'JUnit',
      'Playwright',
      'Log4j',
      'Thymeleaf',
      'Tailwind',
    ],
    description:
      'An SSO (Single Sign-On) System Implemented with Java Spring MVC.',
    links: [
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/SSO',
      },
      {
        type: 'Blog',
        url: '/blog/SSO%20-%20Single%20Sign%20On',
      },
    ],
  },
  {
    title: 'Simple API',
    img: picSimpleApi,
    techStacks: [
      'Node.js',
      'Express',
      'Jest',
      'RESTful',
      'PostgreSQL',
      'Prisma',
    ],
    description: 'A simple RESTful API with Express and PostgreSQL.',
    links: [
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/simple-api',
      },
    ],
  },
  {
    title: 'Image Joiner',
    img: picImageJoiner,
    techStacks: ['Python', 'Pillow'],
    description:
      'A lightweight Python script to seamlessly merge multiple images into a single output.',
    links: [
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/image-joiner',
      },
    ],
  },
  {
    title: "Roger's Studio",
    img: picStudio,
    techStacks: ['Figma', 'UI', 'UX', 'Bootstrap', 'Animate.css'],
    description:
      'A responsive and accessible cyberpunk website, independently completed from design (UX, UI, and prototype) to development.',
    links: [
      {
        type: 'Figma',
        url: "https://www.figma.com/design/CWTJwKO7MGZx76A7dFORGp/Roger's-Studio?t=q7lUhRFFaWLckAxK-1",
      },
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/roger-studio',
      },
      {
        type: 'Live',
        url: 'https://roger-twan.github.io/roger-studio',
      },
    ],
  },
  {
    title: 'Nest Recruitment',
    img: picRecruitment,
    techStacks: ['Nest.js', 'MySQL', 'TypeORM', 'React.js', 'Swagger', 'SWR'],
    description:
      'A comprehensive recruitment system featuring an admin platform and a backend server.',
    links: [
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/nest-server',
      },
    ],
  },
  {
    title: 'Obsidian R2',
    img: picObsidianR2,
    techStacks: ['Typescript'],
    description:
      'An Obsidian plugin that upload files to Cloudflare R2 and embed them in Obsidian',
    links: [
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/obsidian-r2',
      },
      {
        type: 'Blog',
        url: '/blog/Migrate%20from%20Notion%20to%20Obsidian',
      },
    ],
  },
  {
    title: 'Roger Music',
    img: picMusic,
    techStacks: [
      'Flutter',
      'Dart',
      'Firebase',
      'Dio',
      'Serverless',
      'SQLite',
      'Cloudflare',
    ],
    description: 'A cross-platform music player app',
    links: [
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/music',
      },
      {
        type: 'Blog',
        url: '/blog/Building%20a%20Cross-Platform%20Serverless%20Music%20App',
      },
    ],
  },
  {
    title: 'IELTS Tools',
    img: picIELTS,
    techStacks: ['React.js', 'Typescript', 'Vite', 'Mui', 'Tauri'],
    description: 'An IELTS practice tools app',
    links: [
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/ielts-tools',
      },
    ],
  },
  {
    title: 'TWAN',
    img: picTwan,
    techStacks: ['Wordpress', 'Docker', 'MySQL'],
    description: 'A wordpress docker image',
    links: [
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/wordpress',
      },
    ],
  },
  {
    title: 'Plain Launcher',
    img: picLauncher,
    techStacks: ['Flutter', 'Dart'],
    description: 'An android launcher designed to be senior-friendly',
    links: [
      {
        type: 'GitHub',
        url: 'https://github.com/roger-twan/plain_launcher',
      },
      {
        type: 'Blog',
        url: '/blog/Building%20An%20Android%20Launcher%20Designed%20To%20Be%20Senior-Friendly',
      },
    ],
  },
]

export default projectList
