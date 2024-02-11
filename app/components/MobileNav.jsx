'use client';
import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Menu from './Menu';

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
    <div>
      {isOpen ? closeIcon : hamburgerIcon}

      {isOpen ? <Menu setIsOpen={setIsOpen} /> : null}
    </div>
  );
}
