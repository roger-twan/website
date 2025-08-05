'use client';

import { useEffect } from 'react';
import { Photo } from './gallery.data';
import LightGallery from 'lightgallery/react';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import { format } from 'date-fns';
import LazyLoadImage from '@/components/LazyLoadImage';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-autoplay.css';

interface GalleryModuleProps {
  list: Photo[];
}

export default function GalleryModule(props: GalleryModuleProps) {
  useEffect(() => {
    const container = document.querySelector('.gallery-container');
    if (container) {
      const masonry = new Masonry(container, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true,
      });

      imagesLoaded(container).on('progress', () => masonry.layout());
    }
  }, []);

  return (
    <LightGallery
      elementClassNames="gallery-container"
      download={false}
      plugins={[lgAutoplay]}
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
          <div
            className="w-full relative"
            style={{ paddingTop: item.exif.radio * 100 + '%' }}
          >
            <LazyLoadImage
              className="hover:scale-125 hover:z-10"
              src={item.link}
              alt={item.title + item.index}
            />
          </div>
        </a>
      ))}
    </LightGallery>
  );
}
