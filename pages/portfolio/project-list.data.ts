import { StaticImageData } from 'next/image'
import picMusic from '../../public/portfolios/music.png'
import picIELTS from '../../public/portfolios/ielts.png'
import picLauncher from '../../public/portfolios/plain_launcher.png'
import picTwan from '../../public/portfolios/twan.png'
import picObsidianR2 from '../../public/portfolios/obisidan-r2.png'

export interface ProjectInfo {
  title: string
  img: StaticImageData
  platforms: string[]
  techStacks: string[]
  description: string
  codeSource: string
}

const projectList: ProjectInfo[] = [
  {
    title: 'Obsidian R2',
    img: picObsidianR2,
    platforms: ['Obsidian'],
    techStacks: ['Plugin', 'Typescript'],
    description:
      'An Obsidian plugin that upload files to Cloudflare R2 and embed them in Obsidian',
    codeSource: 'https://github.com/roger-twan/obsidian-r2',
  },
  {
    title: 'Roger Music',
    img: picMusic,
    platforms: ['MacOS', 'iOS'],
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
    platforms: ['Web', 'MacOS'],
    techStacks: ['React.js', 'Typescript', 'Vite', 'Mui', 'Tauri'],
    description: 'An IELTS practice tools app',
    codeSource: 'https://github.com/roger-twan/ielts-tools',
  },
  {
    title: 'TWAN',
    img: picTwan,
    platforms: ['Web', 'Mobile Web'],
    techStacks: ['Wordpress', 'Docker', 'MySQL'],
    description: 'A wordpress docker image',
    codeSource: 'https://github.com/roger-twan/wordpress',
  },
  {
    title: 'Plain Launcher',
    img: picLauncher,
    platforms: ['Android'],
    techStacks: ['Flutter', 'Dart'],
    description: 'An android launcher designed to be senior-friendly',
    codeSource: 'https://github.com/roger-twan/plain_launcher',
  },
]

export default projectList
