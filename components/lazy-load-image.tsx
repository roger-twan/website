import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface LazyLoadImageProps {
  src: string
  alt: string
  className?: string
}

const LazyLoadImage = ({ src, alt, className }: LazyLoadImageProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        root: null,
        threshold: 0.05,
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  const getRandomDelay = () => `${Math.random() * 1}s`

  return (
    <div ref={imageRef}>
      {isVisible ? (
        <Image
          className={`transition data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-200 ${className}`}
          src={src}
          alt={alt}
          fill
          data-loaded="false"
          onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full transition animate-pulse bg-gray-200"
          style={{ transitionDelay: getRandomDelay() }}
        />
      )}
    </div>
  )
}

export default LazyLoadImage
