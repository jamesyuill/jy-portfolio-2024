import BackgroundSVG from './components/BackgroundSVG';
import Hero from './components/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundSVG />

      <Hero />
    </main>
  );
}
