'use client';

import { useState } from 'react';
import CanvasComponent from './canvas';

export default function Avatar() {
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  return (
    <div className="lg:w-1/2 w-full m-auto">
      {!isCanvasReady && (
        <svg className="m-auto size-10 animate-spin" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M12 2a10 10 0 00-7.07 17.07l2.83-2.83A6 6 0 0112 6V2z"
          ></path>
        </svg>
      )}
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full">
        <CanvasComponent onReady={() => setIsCanvasReady(true)} />
      </div>
    </div>
  );
}
