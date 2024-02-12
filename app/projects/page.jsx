import React from 'react';
import PageHeading from '../components/PageHeading';
import styles from './projectspage.module.css';
import Projects from '../components/Projects';

export default function projects() {
  return (
    <main className={styles.main}>
      <PageHeading title={'PROJECTS'} />
      <Projects />
    </main>
  );
}
