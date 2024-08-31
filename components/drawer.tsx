import { useEffect, useState } from 'react'

interface DrawerProps {
  children: React.ReactNode
  open: boolean
  onClose?: () => void
}

const Drawer = (props: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(props.open)
  const [visible, setVisible] = useState(props.open)

  useEffect(() => {
    setIsOpen(props.open)
    props.open ? setVisible(true) : setTimeout(() => setVisible(false), 200)
    document.body.style.overflow = props.open ? 'hidden' : 'auto'
  }, [props.open])

  const onClose = () => {
    if (props.onClose) {
      props.onClose()
    } else {
      setIsOpen(false)
      setTimeout(() => setVisible(false), 200)
    }
  }

  return (
    <div className={visible ? 'visible' : 'invisible'}>
      <div
        className={`fixed left-0 top-0 overflow-hidden w-screen h-screen z-10 bg-gray-900 bg-opacity-50 transition-all cursor-pointer ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed right-0 top-0 z-20 w-96 max-w-[70%] h-screen bg-white shadow-2xl p-3 overflow-y-auto transform transition-all ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Drawer
