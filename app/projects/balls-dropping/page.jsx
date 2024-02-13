import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './ballsproj.module.css';

export default function ballsDropping() {
  const techSkills = ['Javascript', 'Three.js', 'Tone.js'];

  return (
    <main className={styles.main}>
      <PageHeading title={'Balls Dropping'} />

      <div id="project-image">
        <img
          src="/project-images/balls-dropping-desktop.png"
          className={styles.projectimage}
        />
      </div>

      <div id="project-container" className={styles.projectcontainer}>
        <div id="project-info">
          <p className={styles.text}>Info about project</p>
        </div>

        <div id="project-tech">
          {/* map over project skills */}
          <ul className={styles.unordered}>
            {techSkills.map((item) => {
              return (
                <li key={item}>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div id="project-links">{/* githubs etc */}</div>
      </div>
    </main>
  );
}
