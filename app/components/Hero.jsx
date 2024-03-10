import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroname}>
        <h1 className={styles.h1}>JAMES YUILL</h1>
        <h2 className={styles.h2}>SOFTWARE ENGINEER</h2>
      </div>
    </div>
  );
}
