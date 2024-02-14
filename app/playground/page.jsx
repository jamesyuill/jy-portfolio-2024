import React from 'react';
import PageHeading from '../components/PageHeading';
import styles from './playgroundpage.module.css';
import FullPageFade from '../components/FullPageFade';

export default function playground() {
  return (
    <main className={styles.main}>
      <PageHeading title={'PLAYGROUND'} />
      <FullPageFade />
    </main>
  );
}
