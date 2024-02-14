import React from 'react';
import PageHeading from '../components/PageHeading';
import styles from './contactpage.module.css';
import FullPageFade from '../components/FullPageFade';

export default function contact() {
  return (
    <main className={styles.main}>
      <PageHeading title={'CONTACT'} />
      <FullPageFade />
    </main>
  );
}
