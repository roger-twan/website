import { PropsWithChildren, useState } from 'react'
import style from './layout.module.scss'
import { useSearchParams } from 'next/navigation'
import { NAV_LIST } from '@/global.config'
import Link from 'next/link'

export default function Layout({ children }: PropsWithChildren<{}>) {
  const isPure = useSearchParams().get('pure')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={style.layout}>
      {!isPure && (
        <div
          className={`${style['navigation-wrapper']} ${
            isMenuOpen ? style['navigation-wrapper-open'] : ''
          }`}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <div
            className={style['navigation-icon']}
            color="white"
            onMouseOver={() => setIsMenuOpen(true)}
          />
          <nav className={style['navigation']}>
            <ul>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link href="/">HOME</Link>
              </li>
              {NAV_LIST.map((nav: NavItem, index: number) => (
                <li key={index} onClick={() => setIsMenuOpen(false)}>
                  <Link href={nav.route}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      {children}
    </div>
  )
}
