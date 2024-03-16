'use client';
import React from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Menu from './Menu';
import styles from './mobilenav.module.css';
import { useContext } from 'react';
import { MenuStatus } from '../context/MenuContext';

export default function MobileNav() {
  const { menuOpen, setMenuOpen } = useContext(MenuStatus);

  const hamburgerIcon = (
    <IoMenu
      size={30}
      className="hamburger"
      onClick={() => setMenuOpen(!menuOpen)}
    />
  );

  const closeIcon = (
    <IoClose
      size={30}
      className="hamburger"
      onClick={() => setMenuOpen(!menuOpen)}
    />
  );

  return (
    <>
      <div className={styles.squareoutline}>
        {menuOpen ? closeIcon : hamburgerIcon}
      </div>

      <div>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
}
