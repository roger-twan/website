import { StaticImageData } from 'next/image'
import picLab from '../../public/portfolio/lab.png'
import picMusic from '../../public/portfolio/music.png'
import picIELTS from '../../public/portfolio/ielts.png'
import picLauncher from '../../public/portfolio/plain_launcher.png'
import picTwan from '../../public/portfolio/twan.png'
import picMap from '../../public/portfolio/map.png'

export interface ProjectInfo {
  title: string
  img: StaticImageData
  platforms: string[]
  techStacks: string[]
  url: string
}

const projectList: ProjectInfo[] = [
  {
    title: 'Music Player',
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
    url: 'https://github.com/roger-twan/music',
  },
  {
    title: 'Lab',
    img: picLab,
    platforms: ['Web'],
    techStacks: [
      'Next.js',
      'Typescript',
      'Three.js',
      'Jest',
      'Mui',
      'Git Action',
    ],
    url: 'https://github.com/roger-twan/lab',
  },
  {
    title: 'IELTS Tools',
    img: picIELTS,
    platforms: ['Web', 'MacOS'],
    techStacks: ['React.js', 'Typescript', 'Vite', 'Mui', 'Tauri'],
    url: 'https://github.com/roger-twan/ielts-tools',
  },
  {
    title: 'Android Launcher',
    img: picLauncher,
    platforms: ['Android'],
    techStacks: ['Flutter', 'Dart'],
    url: 'https://github.com/roger-twan/plain_launcher',
  },
  {
    title: 'TWAN',
    img: picTwan,
    platforms: ['Web', 'Mobile Web'],
    techStacks: ['Wordpress', 'Docker', 'MySQL'],
    url: 'https://github.com/roger-twan/wordpress',
  },
  {
    title: 'TRACK MAP',
    img: picMap,
    platforms: ['Web', 'Mobile Web'],
    techStacks: ['Google Map API', 'Next.js', 'SWR', 'SQLite'],
    url: 'https://github.com/roger-twan/kml-processor',
  },
]

export default projectList
