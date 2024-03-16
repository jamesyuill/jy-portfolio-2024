'use client';
import BackgroundSVG from './components/BackgroundSVG';
import Hero from './components/Hero';
import styles from './page.module.css';
import { useContext, useEffect } from 'react';
import { MenuStatus } from './context/MenuContext';

export default function Home() {
  const { menuOpen, setMenuOpen } = useContext(MenuStatus);

  useEffect(() => {
    setMenuOpen(false);
  }, []);
  return (
    <main className={styles.main}>
      <BackgroundSVG />

      <Hero />
    </main>
  );
}
