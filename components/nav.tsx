import { useEffect, useRef, useState } from 'react'
import HamburgerMenu from './hamburger-menu'
import Mask from './mask'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

const navList = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'About',
    path: '/about',
  },
]

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [menuClickPosition, setMenuClickPosition] = useState<[number, number]>([
    0, 0,
  ])
  const [offsetLeft, setOffsetLeft] = useState<number>(0)
  const [maskFullScreen, setMaskFullScreen] = useState(false)
  const [showMask, setShowMask] = useState(false)
  const menuBtnRef = useRef<any>(null)
  const router = useRouter()
  const currentPath = usePathname()

  const handleResize = () => {
    const width = window.innerWidth
    const maskDiameter = Math.max(width, window.innerHeight) * 1.5
    const maskRadius = maskDiameter / 2
    setOffsetLeft(maskRadius > width ? width / 2 : width - maskRadius / 2)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const onMenuBtnClick = (e: React.MouseEvent, isOpen: boolean) => {
    setIsMenuOpen(isOpen)

    if (isOpen) {
      setMenuClickPosition([e.clientX, e.clientY])
      setShowMask(true)
      setMenuVisible(true)
    } else {
      setTimeout(() => setShowMask(false), 350)
      setTimeout(() => setMenuVisible(false), 500)
    }
  }

  const onMenuClick = (path: string) => {
    if (currentPath === path) return

    menuBtnRef.current?.triggerClose()
    setIsMenuOpen(false)
    setMaskFullScreen(true)
    setTimeout(() => {
      setMaskFullScreen(false)
      setShowMask(false)
    }, 350)
    setTimeout(() => setMenuVisible(false), 500)
    setTimeout(() => router.push(path), 100)
  }

  const menuAnimationStyle = (delay: number) => {
    return {
      className: `my-5 ${
        isMenuOpen ? 'animate-focus-in-contract' : 'animate-blur-out-expand'
      }`,
      style: { animationDelay: `${isMenuOpen ? delay : delay / 2}s` },
    }
  }

  return (
    <>
      <HamburgerMenu
        className="!fixed top-4 right-4"
        onClick={onMenuBtnClick}
        ref={menuBtnRef}
      />
      <Mask
        show={showMask}
        position={menuClickPosition}
        fullScreen={maskFullScreen}
      />
      <nav
        className={`fixed z-30 top-20 -translate-x-1/2 ${
          menuVisible ? 'visible' : 'invisible'
        }`}
        style={{ left: offsetLeft }}
      >
        <ul className="font-orbitron text-5xl text-center">
          {navList.map((item, index) => (
            <li key={index} {...menuAnimationStyle(0.3 + index * 0.05)}>
              <button
                className="transition-[text-shadow] duration-500 hover:[text-shadow:_-3px_3px_white] uppercase"
                onClick={() => onMenuClick(item.path)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav
