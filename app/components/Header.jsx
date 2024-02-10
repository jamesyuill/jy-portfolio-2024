import React from 'react';
import styles from './header.module.css';
import MobileNav from './MobileNav';
import Logo from './Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <MobileNav />
    </header>
  );
}
