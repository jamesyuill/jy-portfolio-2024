import React from 'react';
import styles from './menu.module.css';

export default function Menu() {
  return (
    <div className={styles.background}>
      <div className={styles.navmodal}>
        <div>HOME</div>
        <div>ABOUT</div>
        <div>SKILLS</div>
        <div>PROJECTS</div>
        <div>PLAYGROUND</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
}
