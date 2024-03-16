'use client';
import React, { useEffect } from 'react';
import PageHeading from '../components/PageHeading';
import styles from './contactpage.module.css';
import FullPageFade from '../components/FullPageFade';
import Contact from '../components/Contact';
import RandomShapes from '../components/RandomShapes';
import { useContext } from 'react';
import { MenuStatus } from '../context/MenuContext';

export default function contact() {
  const { menuOpen, setMenuOpen } = useContext(MenuStatus);

  useEffect(() => {
    setMenuOpen(false);
  }, []);
  return (
    <main className={styles.main}>
      <PageHeading title={'CONTACT'} />
      <FullPageFade />
      <RandomShapes />
      <Contact />
    </main>
  );
}
