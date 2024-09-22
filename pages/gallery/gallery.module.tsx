import { useEffect } from 'react'
import { Photo } from './gallery.data'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgAutoplay from 'lightgallery/plugins/autoplay'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import { format } from 'date-fns'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-autoplay.css'

interface GalleryModuleProps {
  list: Photo[]
}

const GalleryModule = (props: GalleryModuleProps) => {
  useEffect(() => {
    const container = document.querySelector('.gallery-container')
    if (container) {
      const msnry = new Masonry(container, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true,
      })

      imagesLoaded(container).on('progress', () => msnry.layout())
    }
  }, [])

  return (
    <LightGallery
      elementClassNames="gallery-container"
      download={false}
      plugins={[lgThumbnail, lgAutoplay]}
    >
      {props.list.map((item: Photo) => (
        <a
          href="#"
          key={item.title + item.index}
          className="gallery-item w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5"
          data-src={item.link}
          data-sub-html={`
            <h3>${item.title} ${
            item.total > 1 && `(${item.index} of ${item.total})`
          }</h3>
            <p>${item.description}</p>
            <p>${format(new Date(item.date), 'LLL dd, yyyy')}</p>
            <p>${item.exif.camera} | ${item.exif.len} | ${
            item.exif.focalLength
          } | ${item.exif.aperture} | ${item.exif.shutterSpeed} | ${
            item.exif.iso
          }</p>
          `}
        >
          <img src={item.link} alt={item.title + item.index} />
        </a>
      ))}
    </LightGallery>
  )
}

export default GalleryModule
