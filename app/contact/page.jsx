import React from 'react';
import PageHeading from '../components/PageHeading';
import styles from './contactpage.module.css';
import FullPageFade from '../components/FullPageFade';
import Contact from '../components/Contact';
import RandomShapes from '../components/RandomShapes';

export default function contact() {
  return (
    <main className={styles.main}>
      <PageHeading title={'CONTACT'} />
      <FullPageFade />
      <RandomShapes />
      <Contact />
    </main>
  );
}
