import Link from 'next/link';
import { PropsWithChildren } from 'react'
import style from './layout.module.scss'
import HomeIcon from '@mui/icons-material/home';


export default function Layout( { children }: PropsWithChildren<{}> ) {
  return (
    <div className={style.layout}>
      <Link href="/" className={style['back-home']}>
        <HomeIcon sx={{
          color: '#fff',
          fontSize: '20px'
        }} />
      </Link>
      {children}
    </div>
  )
}
