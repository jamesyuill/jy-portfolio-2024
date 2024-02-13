import React from 'react';
import styles from './projectcard.module.css';
import Link from 'next/link';

export default function ProjectCard({ title, imgUrl, disc, endpoint }) {
  return (
    <Link href={`projects/${endpoint}`} className={styles.link}>
      <article className={styles.article}>
        <img className={styles.img} src={`project-images/${imgUrl}`} />
        <div>
          <h1 className={styles.h1}>{title}</h1>
          <h2 className={styles.h2}>{disc}</h2>
        </div>
      </article>
    </Link>
  );
}
