import React from 'react';
import PageHeading from '../components/PageHeading';
import styles from './aboutpage.module.css';
import About from '../components/About';
import FullPageFade from '../components/FullPageFade';
export default function about() {
  return (
    <main className={styles.main}>
      <PageHeading title={'ABOUT'} />
      <FullPageFade />
      <About />
    </main>
  );
}
