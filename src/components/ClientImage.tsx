'use client';

import { useState, useEffect } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ClientImage({
  src,
  alt,
  className,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    if (img.complete) {
      setLoaded(true);
    } else {
      img.onload = () => setLoaded(true);
    }
  }, [src]);
  return (
    <div className={`bg-gray-200 overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={src}
        className="object-cover transition data-[loaded=false]:animate-pulse group-hover:scale-110 h-full w-full"
        src={src}
        alt={alt}
        {...props}
        data-loaded={loaded}
      />
    </div>
  );
}
