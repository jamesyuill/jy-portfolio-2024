'use client';
import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Menu from './Menu';
import styles from './mobilenav.module.css';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerIcon = (
    <IoMenu
      size={30}
      className="hamburger"
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  const closeIcon = (
    <IoClose
      size={30}
      className="hamburger"
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  return (
    <>
      <div className={styles.squareoutline}>
        {isOpen ? closeIcon : hamburgerIcon}
      </div>
      <div>{isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}</div>
    </>
  );
}
