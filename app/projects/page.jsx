'use client';
import React, { useEffect } from 'react';
import PageHeading from '../components/PageHeading';
import styles from './projectspage.module.css';
import Projects from '../components/Projects';
import FullPageFade from '../components/FullPageFade';
import { useContext } from 'react';
import { MenuStatus } from '../context/MenuContext';

export default function projects() {
  const { menuOpen, setMenuOpen } = useContext(MenuStatus);

  useEffect(() => {
    setMenuOpen(false);
  }, []);
  return (
    <main className={styles.main}>
      <PageHeading title={'PROJECTS'} />
      <FullPageFade />

      <Projects />
    </main>
  );
}
