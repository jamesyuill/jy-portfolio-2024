import React from 'react';
import styles from './hero.module.css';
import HeroSVG from './HeroSVG';
import LineSVG from './LineSVG';
import dynamic from 'next/dynamic';

{
  /* importing this dynamically as the random values cause it to error in the console*/
}

const Bg = dynamic(() => import('./Bg'), { ssr: false });

const LineCircleSVG = dynamic(() => import('./LineCircleSVG'), { ssr: false });

export default function Hero() {
  // const animationLookup = {
  //   0: <HeroSVG />,
  //   1: <LineSVG />,
  //   2: <LineCircleSVG />,
  // };

  return (
    <div className={styles.herocontainer}>
      <div className={styles.heroname}>
        <h1 className={styles.h1}>JAMES YUILL</h1>
        <h2 className={styles.h2}>SOFTWARE ENGINEER</h2>
      </div>
      <div className={styles.svgbackground}>
        <Bg />
        {/* {animationLookup[Math.floor(Math.random() * 3)]} */}
      </div>
    </div>
  );
}
