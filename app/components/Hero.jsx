import React from 'react';
import styles from './hero.module.css';
import HeroSVG from './HeroSVG';

export default function Hero() {
  return (
    <div className={styles.herocontainer}>
      <div className={styles.heroname}>
        <h1 className={styles.h1}>JAMES YUILL</h1>

        <h2 className={styles.h2}>SOFTWARE ENGINEER</h2>
      </div>
      <div className={styles.svgbackground}>
        <HeroSVG />
      </div>
    </div>
  );
}
