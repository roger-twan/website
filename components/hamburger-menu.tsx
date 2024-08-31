import { forwardRef, Ref, useImperativeHandle, useState } from 'react'

interface HamburgerMenuProps {
  className?: string
  onClick?: (e: React.MouseEvent, isOpen: boolean) => void
}

const HamburgerMenu = forwardRef(
  (props: HamburgerMenuProps, ref: Ref<unknown> | undefined) => {
    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => ({
      triggerClose: () => setIsOpen(false),
    }))

    const spanCommon = `
    block
    absolute
    w-1/2
    h-1.5
    bg-black
    opacity-100
    rotate-0
    transition-all
  `

    const spanOdd = 'left-0 rounded-l-full'
    const spanEven = 'left-1/2 rounded-r-full'

    const onMenuClick = (e: React.MouseEvent) => {
      props.onClick?.(e, !isOpen)
      setIsOpen(!isOpen)
    }

    return (
      <div
        className={`relative w-10 h-8 cursor-pointer scale-75 opacity-30 z-20 transition-all ${props.className} hover:opacity-100`}
        onClick={(e: React.MouseEvent) => onMenuClick(e)}
      >
        <span
          className={`${spanCommon} ${spanOdd} top-0 ${
            isOpen && 'rotate-45 top-2 left-1'
          }`}
        />
        <span
          className={`${spanCommon} ${spanEven} top-0 ${
            isOpen && '!-rotate-45 top-2 left-3.5'
          }`}
        />
        <span
          className={`${spanCommon} ${spanOdd} top-3 ${
            isOpen && '!opacity-0 !-left-full'
          }`}
        />
        <span
          className={`${spanCommon} ${spanEven} top-3 ${
            isOpen && '!opacity-0 left-full'
          }`}
        />
        <span
          className={`${spanCommon} ${spanOdd} top-6 ${
            isOpen && '!-rotate-45 !top-[18px] left-1'
          }`}
        />
        <span
          className={`${spanCommon} ${spanEven} top-6 ${
            isOpen && 'rotate-45 !top-[18px] left-3.5'
          }`}
        />
      </div>
    )
  }
)

HamburgerMenu.displayName = 'HamburgerMenu'
export default HamburgerMenu
