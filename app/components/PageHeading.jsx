import React from 'react';
import styles from './pageheading.module.css';

export default function PageHeading({ title }) {
  return <h1 className={styles.h1}>{title}</h1>;
}
