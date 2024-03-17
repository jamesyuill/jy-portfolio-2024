import React from 'react';
import styles from './logo.module.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link className={styles.link} href="/">
      <div className={styles.squareoutline}>
        <h1 className={styles.h1}>JY</h1>
      </div>
    </Link>
  );
}
