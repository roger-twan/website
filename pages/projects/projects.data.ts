import { StaticImageData } from 'next/image'
import picMusic from '../../public/projects/music.png'
import picIELTS from '../../public/projects/ielts.png'
import picLauncher from '../../public/projects/plain_launcher.png'
import picTwan from '../../public/projects/twan.png'
import picObsidianR2 from '../../public/projects/obisidan-r2.png'

export interface ProjectInfo {
  title: string
  img: StaticImageData
  techStacks: string[]
  description: string
  codeSource: string
}

const projectList: ProjectInfo[] = [
  {
    title: 'Obsidian R2',
    img: picObsidianR2,
    techStacks: ['Typescript'],
    description:
      'An Obsidian plugin that upload files to Cloudflare R2 and embed them in Obsidian',
    codeSource: 'https://github.com/roger-twan/obsidian-r2',
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
    codeSource: 'https://github.com/roger-twan/music',
  },
  {
    title: 'IELTS Tools',
    img: picIELTS,
    techStacks: ['React.js', 'Typescript', 'Vite', 'Mui', 'Tauri'],
    description: 'An IELTS practice tools app',
    codeSource: 'https://github.com/roger-twan/ielts-tools',
  },
  {
    title: 'TWAN',
    img: picTwan,
    techStacks: ['Wordpress', 'Docker', 'MySQL'],
    description: 'A wordpress docker image',
    codeSource: 'https://github.com/roger-twan/wordpress',
  },
  {
    title: 'Plain Launcher',
    img: picLauncher,
    techStacks: ['Flutter', 'Dart'],
    description: 'An android launcher designed to be senior-friendly',
    codeSource: 'https://github.com/roger-twan/plain_launcher',
  },
]

export default projectList
