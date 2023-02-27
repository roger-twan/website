import Link from 'next/link'
import style from './nav.module.scss'
import { NAV_LIST } from '@/global.config'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [offsetTopArr, setOffsetTopArr] = useState<string[]>([])
  const [animationDelayArr, setAnimationDelayArr] = useState<string[]>([])
  const generateStyleValue = () => {
    const MAX_OFFSET_TOP = 80
    const MIN_OFFSET_TOP = 30
    const _offsetTopArr: string[] = []
    const _animationDelayArr: string[] = []

    for (let i = 0; i < NAV_LIST.length; i++) {
      const offsetTop = `${
        Math.random() * (MAX_OFFSET_TOP - MIN_OFFSET_TOP) + MIN_OFFSET_TOP
      }%`
      const delay = `0s, ${Math.random() + 0.5}s`

      _offsetTopArr.push(offsetTop)
      _animationDelayArr.push(delay)
    }

    setOffsetTopArr(_offsetTopArr)
    setAnimationDelayArr(_animationDelayArr)
  }

  useEffect(() => {
    offsetTopArr.length !== NAV_LIST.length && generateStyleValue()
  })

  return (
    <div id="nav" className={style.nav}>
      <ul>
        <li />
        {NAV_LIST.map((nav: NavItem, index: number) => (
          <li key={index}>
            <div
              style={{
                top: offsetTopArr[index],
                animationDelay: animationDelayArr[index],
              }}
            />
            <Link href={nav.route}>
              <span style={{ top: offsetTopArr[index] }}>{nav.title}</span>
            </Link>
          </li>
        ))}
        <li />
      </ul>
    </div>
  )
}
