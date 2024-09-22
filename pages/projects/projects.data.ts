import { StaticImageData } from 'next/image'
import picMusic from '../../public/projects/music.png'
import picIELTS from '../../public/projects/ielts.png'
import picLauncher from '../../public/projects/plain_launcher.png'
import picTwan from '../../public/projects/twan.png'
import picObsidianR2 from '../../public/projects/obisidan-r2.png'
import picRecruitment from '../../public/projects/recruitment.png'
import picStudio from '../../public/projects/roger_studio.jpeg'

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
    title: 'Image Joiner',
    img: picStudio,
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
    ],
  },
]

export default projectList
