'use client';

import { useState } from 'react';
import CanvasComponent from './canvas';
import IconLoading from '@public/icons/loading.svg';

export default function Avatar() {
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  return (
    <div className="lg:w-1/2 w-full m-auto">
      {!isCanvasReady && (
        <IconLoading className="m-auto size-10 animate-spin text-white" />
      )}
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full">
        <CanvasComponent onReady={() => setIsCanvasReady(true)} />
      </div>
    </div>
  );
}
