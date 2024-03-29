import React from 'react';
import Link from 'next/link';
import styles from './threesketches.module.css';
import Image from 'next/image';

export default function ThreeSketches() {
  const sketches = [
    {
      name: 'Floating Grid',
      img_src: '/three-images/three-floating-grid.png',
      img_url: 'https://floating-grid.netlify.app',
    },
    {
      name: 'Moody Ball',
      img_src: '/three-images/three-moody-ball.png',
      img_url: 'https://moody-ball.netlify.app',
    },
    {
      name: 'cable tv Website',
      img_src: '/three-images/three-cable-tv-website.png',
      img_url: 'https://cable-tv-website.netlify.app',
    },
    {
      name: 'JY Portfolio 2023',
      img_src: '/three-images/react-three-jy-portfolio-2023.png',
      img_url: 'https://jy-portfolio-2023.netlify.app/',
    },
  ];

  return (
    <div>
      <div id="title" className={styles.title}>
        Three Sketches
      </div>
      <div id="container" className={styles.container}>
        {sketches.map((item) => {
          return (
            <div className={styles.threesketchcontainer}>
              <Link
                key={item.name}
                href={item.img_url}
                className={styles.threelink}
              >
                <Image
                  src={item.img_src}
                  width={110}
                  height={80}
                  alt={item.img_src}
                  placeholder="empty"
                />

                <p className={styles.name}>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
