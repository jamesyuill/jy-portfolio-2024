import React from 'react';
import PageHeading from '../components/PageHeading';
import styles from './aboutpage.module.css';
import About from '../components/About';
export default function about() {
  return (
    <main className={styles.main}>
      <PageHeading title={'ABOUT'} />
      <About />
    </main>
  );
}
