'use client';
import React, { useState } from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Menu({ isOpen, setIsOpen }) {
  const [btnClicked, setButtonClicked] = useState(false);
  const { push } = useRouter();

  return (
    <div className={btnClicked ? styles.backgroundfadeout : styles.background}>
      <div className={styles.navmodal}>
        <a
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();

            setButtonClicked(true);
            push('/');
            setTimeout(() => {
              setIsOpen(false);
            }, 1500);
          }}
        >
          <div className={styles.menubtn}>HOME</div>
        </a>
        <a
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();

            setButtonClicked(true);
            push('/about');
            setTimeout(() => {
              setIsOpen(false);
            }, 1500);
          }}
        >
          <div className={styles.menubtn}>ABOUT</div>
        </a>
        <a
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();

            setButtonClicked(true);
            push('/skills');
            setTimeout(() => {
              setIsOpen(false);
            }, 1500);
          }}
        >
          <div className={styles.menubtn}>SKILLS</div>
        </a>
        <a
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();

            setButtonClicked(true);
            push('/projects');
            setTimeout(() => {
              setIsOpen(false);
            }, 1500);
          }}
        >
          <div className={styles.menubtn}>PROJECTS</div>
        </a>
        <a
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();

            setButtonClicked(true);
            push('/playground');
            setTimeout(() => {
              setIsOpen(false);
            }, 1500);
          }}
        >
          <div className={styles.menubtn}>PLAYGROUND</div>
        </a>
        <a
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();

            setButtonClicked(true);
            push('/contact');
            setTimeout(() => {
              setIsOpen(false);
            }, 1500);
          }}
        >
          <div className={styles.menubtn}>CONTACT</div>
        </a>
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
