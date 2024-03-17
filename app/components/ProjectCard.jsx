import React from 'react';
import styles from './projectcard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ title, imgUrl, disc, endpoint }) {
  return (
    <Link href={`projects/${endpoint}`} className={styles.link}>
      <article className={styles.article}>
        <div className={styles.imagecontainer}>
          <Image
            src={`/project-images/${imgUrl}`}
            width={300}
            height={250}
            alt={title}
            placeholder="empty"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* <img className={styles.img} src={`project-images/${imgUrl}`} /> */}
        <div>
          <h1 className={styles.h1}>{title}</h1>
          <h2 className={styles.h2}>{disc}</h2>
        </div>
      </article>
    </Link>
  );
}
