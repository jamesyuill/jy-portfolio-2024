'use client';
import React, { useEffect } from 'react';
import PageHeading from '../components/PageHeading';
import styles from './aboutpage.module.css';
import About from '../components/About';
import FullPageFade from '../components/FullPageFade';
import RandomShapes from '../components/RandomShapes';
import { useContext } from 'react';
import { MenuStatus } from '../context/MenuContext';

export default function about() {
  const { menuOpen, setMenuOpen } = useContext(MenuStatus);

  useEffect(() => {
    setMenuOpen(false);
  }, []);
  return (
    <main className={styles.main}>
      <PageHeading title={'ABOUT'} />
      <FullPageFade />
      <RandomShapes />
      <About />
    </main>
  );
}
