import React from 'react';
import styles from './logo.module.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className={styles.squareoutline}>
      <h1 className={styles.h1}>
        <Link className={styles.link} href="/">
          JY
        </Link>
      </h1>
    </div>
  );
}
