'use client';
import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Menu from './Menu';
import styles from './mobilenav.module.css';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerIcon = (
    <IoMenu
      size={40}
      className="hamburger"
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  const closeIcon = (
    <IoClose
      size={40}
      className="hamburger"
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  return (
    <div className={styles.squareoutline}>
      {isOpen ? closeIcon : hamburgerIcon}

      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </div>
  );
}
