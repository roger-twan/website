import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const handleResize = () => setIsMobile(window.innerWidth < 1020)
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return isMobile
}

export default useIsMobile
