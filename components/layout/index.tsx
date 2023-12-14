import Link from 'next/link'
import { PropsWithChildren } from 'react'
import style from './layout.module.scss'
import { Home as HomeIcon } from '@mui/icons-material'
import { useSearchParams } from 'next/navigation'

export default function Layout({ children }: PropsWithChildren<{}>) {
  const isPure = useSearchParams().get('pure')

  return (
    <div className={style.layout}>
      {!isPure && (
        <Link href="/" className={style['back-home']}>
          <HomeIcon
            sx={{
              color: '#fff',
              fontSize: '20px',
            }}
          />
        </Link>
      )}
      {children}
    </div>
  )
}
