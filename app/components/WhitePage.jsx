import React from 'react';
import styles from './whitepage.module.css';

export default function WhitePage({ close, setClose }) {
  return (
    <div className={close ? styles.closewhitepage : styles.showwhitepage}></div>
  );
}
