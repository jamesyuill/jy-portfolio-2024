import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';

import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Menu({ setIsOpen }) {
  return (
    <div className={styles.background}>
      <div className={styles.navmodal}>
        <Link className={styles.link} href="/" onClick={() => setIsOpen(false)}>
          <div className={styles.menubtn}>HOME</div>
        </Link>
        <Link
          className={styles.link}
          href="/about"
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.menubtn}>ABOUT</div>
        </Link>
        <Link
          className={styles.link}
          href="/skills"
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.menubtn}>SKILLS</div>
        </Link>
        <Link
          className={styles.link}
          href="/projects"
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.menubtn}>PROJECTS</div>
        </Link>
        <Link
          className={styles.link}
          href="/playground"
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.menubtn}>PLAYGROUND</div>
        </Link>
        <Link
          className={styles.link}
          href="/contact"
          onClick={() => setIsOpen(false)}
        >
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
