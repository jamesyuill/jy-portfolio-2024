'use client';
import React, { useEffect } from 'react';
import Skills from '../components/Skills';
import PageHeading from '../components/PageHeading';
import styles from './skillspage.module.css';
import FullPageFade from '../components/FullPageFade';
import RandomShapes from '../components/RandomShapes';
import { useContext } from 'react';
import { MenuStatus } from '../context/MenuContext';

export default function skills() {
  const { menuOpen, setMenuOpen } = useContext(MenuStatus);

  useEffect(() => {
    setMenuOpen(false);
  }, []);
  return (
    <main className={styles.main}>
      <PageHeading title={'SKILLS'} />
      <FullPageFade />
      <RandomShapes />
      <Skills />
    </main>
  );
}
