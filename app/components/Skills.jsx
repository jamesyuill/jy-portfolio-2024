import React from 'react';
import styles from './skills.module.css';

export default function Skills() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.subheading}>LANGUAGES, PROGRAMS & SOFTWARES</h3>
      </div>
      <div>
        <ul className={styles.unordered}>
          <li>JAVASCRIPT</li>
          <li>TYPESCRIPT</li>
          <li>PYTHON (currently learning)</li>
          <li>REACT</li>
          <li>NEXT</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>THREE</li>
          <li>P5</li>
          <li>NODE</li>
          <li>EXPRESS</li>
          <li>GRAPHQL</li>
          <li>SQL</li>
          <li>MONGODB</li>
          <li>JEST</li>
          <li>TOUCHDESIGNER</li>
          <li>BLENDER</li>
          <li>ABLETON LIVE</li>
          <li>PRO TOOLS</li>
        </ul>
      </div>
    </div>
  );
}
