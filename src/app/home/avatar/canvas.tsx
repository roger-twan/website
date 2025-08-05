'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './model';
import { Vector3 } from 'three';

interface Light {
  position: [number, number, number];
  intensity: number;
  color: string;
}

const lights: Light[] = [
  { position: [-1, 1, 2], intensity: 8, color: 'white' }, // key light
  { position: [1, 1, 2], intensity: 8, color: 'white' }, // fill light
  { position: [0, -2, 2], intensity: 4, color: 'white' }, // bottom light
];

export default function Avatar({ onReady }: { onReady: () => void }) {
  const [position, setPosition] = useState<Vector3>(new Vector3(0, 0, 0));

  function calculatePosition(width: number) {
    const desktopPosition = new Vector3(0.6, 0, 0);
    const tabletPosition = new Vector3(0, -0.2, -0.6);
    const mobilePosition = new Vector3(0, -0.6, -1.8);
    const tabletWidthThreshold = 1024;
    const mobileWidthThreshold = 768;

    switch (true) {
      case width < mobileWidthThreshold:
        return mobilePosition;
      case width < tabletWidthThreshold:
        return tabletPosition;
      default:
        return desktopPosition;
    }
  }

  useEffect(() => {
    function detectWidth() {
      setPosition(calculatePosition(window.innerWidth));
    }

    detectWidth();

    window.addEventListener('resize', detectWidth);
    return () => window.removeEventListener('resize', detectWidth);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 1.9], fov: 40 }}>
      <group position={position}>
        <Model onShow={onReady} />
        {lights.map((light, index) => (
          <spotLight
            key={index}
            position={light.position}
            intensity={light.intensity}
            color={light.color}
          />
        ))}
      </group>
    </Canvas>
  );
}
