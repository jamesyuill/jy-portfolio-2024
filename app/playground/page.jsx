'use client';
import React, { useEffect } from 'react';
import PageHeading from '../components/PageHeading';
import styles from './playgroundpage.module.css';
import FullPageFade from '../components/FullPageFade';
import P5Sketches from '../components/P5Sketches';
import ThreeSketches from '../components/ThreeSketches';
import { useContext } from 'react';
import { MenuStatus } from '../context/MenuContext';

export default function playground() {
  const { menuOpen, setMenuOpen } = useContext(MenuStatus);

  useEffect(() => {
    setMenuOpen(false);
  }, []);
  return (
    <main className={styles.main}>
      <PageHeading title={'PLAYGROUND'} />
      <FullPageFade />

      <P5Sketches />
      <ThreeSketches />
    </main>
  );
}
