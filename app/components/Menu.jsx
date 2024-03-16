import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';

import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Logo from './Logo';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={menuOpen ? styles.menuShow : styles.menuHide}>
      <div className={styles.navmodal}>
        <div className={styles.header}>
          <Logo />
          <div className={styles.squareoutline}>
            <IoClose size={30} onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>
        <Link href="/" className={styles.link}>
          <div className={styles.menubtn}>HOME</div>
        </Link>
        <Link href="/about" className={styles.link}>
          <div className={styles.menubtn}>ABOUT</div>
        </Link>
        <Link href="/skills" className={styles.link}>
          <div className={styles.menubtn}>SKILLS</div>
        </Link>
        <Link href="/projects" className={styles.link}>
          <div className={styles.menubtn}>PROJECTS</div>
        </Link>
        <Link href="/playground" className={styles.link}>
          <div className={styles.menubtn}>PLAYGROUND</div>
        </Link>
        <Link href="/contact" className={styles.link}>
          <div className={styles.menubtn}>CONTACT</div>
        </Link>
        <div>
          <div className={styles.socials}>
            <a
              className={styles.iconlink}
              href="http://www.linkedin.com/in/jamesyuill"
              target="_blank"
            >
              <FaLinkedin color="black" />
            </a>

            <a
              className={styles.iconlink}
              href="http://instagram.com/reanimatedgif"
              target="_blank"
            >
              <FaInstagram color="black" />
            </a>
            <a
              className={styles.iconlink}
              href="http://www.twitter.com/jamesyuill"
              target="_blank"
            >
              <FaTwitter color="black" />
            </a>

            <a
              className={styles.iconlink}
              href="http://github.com/jamesyuill"
              target="_blank"
            >
              <FaGithub color="black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
