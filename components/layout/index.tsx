import Link from 'next/link'
import { PropsWithChildren } from 'react'
import style from './layout.module.scss'
import { Home as HomeIcon } from '@mui/icons-material'

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className={style.layout}>
      <Link href="/" className={style['back-home']}>
        <HomeIcon
          sx={{
            color: '#fff',
            fontSize: '20px',
          }}
        />
      </Link>
      {children}
    </div>
  )
}
