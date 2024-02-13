import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './wcproj.module.css';

export default function whatCarb() {
  const techSkills = ['Javascript', 'Three.js', 'Tone.js'];

  return (
    <main className={styles.main}>
      <PageHeading title={'What Carb?'} />

      <div id="project-image">
        <a href="https://balls-dropping.netlify.app/" target="_blank">
          <img
            src="/project-images/what-carb-desktop-and-mobile.png"
            className={styles.projectimage}
          />
        </a>
      </div>

      <div id="project-container" className={styles.projectcontainer}>
        <p className={styles.subheading}>A MERN Dish Selector App</p>
        <div id="project-info" className={styles.projectinfo}>
          <div id="description">
            <p className={styles.text}>
              - Built in vanilla Three.js and using Tone.js for the audio
              elements.
            </p>
            <p className={styles.text}>
              - The aim was to get a visual representation of a bouncing ball,
              but once I'd built one ball, I then wanted to generate more. I
              refactored the bouncing ball as an extended class with it's own
              methods.
            </p>
            <p className={styles.text}>
              - I would like to add the ability for a user to upload an audio
              clip and for that to be used. Maybe even to split the sounds up
              over the number of balls.
            </p>
            <p className={styles.text}>
              - To learn more about the app visit the github links below.
            </p>
          </div>

          <div id="project-tech" className={styles.projecttechandlinks}>
            {/* map over project skills */}
            <ul className={styles.unordered}>
              <p className={styles.textb}>Tech Stack:</p>
              {techSkills.map((item) => {
                return (
                  <li key={item}>
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>

            <div id="project-links" className={styles.projectlinks}>
              {/* githubs etc */}
              <div className="github-link">
                <a
                  className={styles.plink}
                  href="https://github.com/jamesyuill/bouncing-ball"
                  target="_blank"
                >
                  Github
                </a>

                <a
                  className={styles.plink}
                  href="https://balls-dropping.netlify.app/"
                  target="_blank"
                >
                  Deployed Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
