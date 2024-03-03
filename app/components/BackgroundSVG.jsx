'use client';
import CircleInter from './CircleInter';
import SquareInter from './SquareInter';
import { useState } from 'react';
import styles from './backsvg.module.css';

export default function BackgroundSVG({ path }) {
  const [pathName, setPathName] = useState(path);

  const animationLookup = {
    0: <CircleInter />,
    1: <SquareInter />,
  };
  return (
    <div className={styles.backgrounddiv}>
      {/* {path === 'home' ? animationLookup[0] : null} */}
      {animationLookup[Math.floor(Math.random() * 2)]}
    </div>
  );
}
