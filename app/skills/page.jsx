import React from 'react';
import Skills from '../components/Skills';
import PageHeading from '../components/PageHeading';
import styles from './skillspage.module.css';
import FullPageFade from '../components/FullPageFade';
import RandomShapes from '../components/RandomShapes';

export default function skills() {
  return (
    <main className={styles.main}>
      <PageHeading title={'SKILLS'} />
      <FullPageFade />
      <RandomShapes />
      <Skills />
    </main>
  );
}
