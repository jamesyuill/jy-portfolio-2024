import React from 'react';
import PageHeading from '../components/PageHeading';
import styles from './playgroundpage.module.css';
import FullPageFade from '../components/FullPageFade';
import P5Sketches from '../components/P5Sketches';
import ThreeSketches from '../components/ThreeSketches';

export default function playground() {
  return (
    <main className={styles.main}>
      <PageHeading title={'PLAYGROUND'} />
      <FullPageFade />

      <P5Sketches />
      <ThreeSketches />
      {/* <RandomSketches /> */}
    </main>
  );
}
