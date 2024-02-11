import React from 'react';
import PageHeading from '../components/PageHeading';
import styles from './projectspage.module.css';

export default function projects() {
  return (
    <main className={styles.main}>
      <PageHeading title={'PROJECTS'} />
    </main>
  );
}
