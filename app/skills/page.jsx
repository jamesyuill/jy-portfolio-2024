import React from 'react';
import Skills from '../components/Skills';
import PageHeading from '../components/PageHeading';
import styles from './skillspage.module.css';

export default function skills() {
  return (
    <main className={styles.main}>
      <PageHeading title={'SKILLS'} />
      <Skills />
    </main>
  );
}
