import Link from 'next/link'
import { PropsWithChildren } from 'react'
import style from './layout.module.scss'
import { useSearchParams } from 'next/navigation'
import { Home } from '@geist-ui/icons'

export default function Layout({ children }: PropsWithChildren<{}>) {
  const isPure = useSearchParams().get('pure')

  return (
    <div className={style.layout}>
      {!isPure && (
        <Link href="/" className={style['back-home']}>
          <Home />
        </Link>
      )}
      {children}
    </div>
  )
}
