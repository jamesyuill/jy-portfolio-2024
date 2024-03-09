import React from 'react';
import Link from 'next/link';
import styles from './p5sketches.module.css';

export default function P5Sketches() {
  const sketches = [
    {
      img_src: '/p5-images/p5-spiral.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/jMLFOIYwE',
    },
    {
      img_src: '/p5-images/p5-phase-sine-wave.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/DxD5TZsUM',
    },
    {
      img_src: '/p5-images/p5-oscillator.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/RkvH_NCk7',
    },
    {
      img_src: '/p5-images/p5-colourful-grid.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/wUnngcJmr',
    },
    {
      img_src: '/p5-images/p5-connecting-spheres.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/UBsozvsqU',
    },
    {
      img_src: '/p5-images/p5-changing-circles.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/E9YdPVYnB',
    },
    {
      img_src: '/p5-images/p5-circle-of-circles.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/zkFa0HLEa',
    },
    {
      img_src: '/p5-images/p5-perlin-noise-circle.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/KX3Rtvqz8',
    },
    {
      img_src: '/p5-images/p5-colourful-squares.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/vQaa7F1qL',
    },
    {
      img_src: '/p5-images/p5-maurer-rose.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/MZwLi3x7NL',
    },
    {
      img_src: '/p5-images/p5-switch-case.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/qtrULMWBb',
    },
    {
      img_src: '/p5-images/p5-dancing-line.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/h73HBInYv',
    },
    {
      img_src: '/p5-images/p5-growing-circles.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/zbZDrsdd8',
    },
    {
      img_src: '/p5-images/p5-microsoft-screensaver.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/l0_sIhS_J',
    },
    {
      img_src: '/p5-images/p5-hello-in-balls.png',
      img_url: 'https://editor.p5js.org/jamesyuill/full/F-s9W5VXS',
    },
  ];

  return (
    <div>
      <div id="title" className={styles.title}>
        P5 Sketches
      </div>
      <div id="container" className={styles.container}>
        {sketches.map((item) => {
          return (
            <Link key={item.img_src} href={item.img_url}>
              <img className={styles.image} src={item.img_src} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
