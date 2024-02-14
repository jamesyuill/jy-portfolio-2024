import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './ballsproj.module.css';

export default function ballsDropping() {
  const techSkills = ['Javascript', 'Three.js', 'Tone.js'];

  return (
    <main className={styles.main}>
      <PageHeading title={'Balls Dropping'} />

      <div className={styles.projectcontainer}>
        {/* image div */}
        <div id="project-image-div" className={styles.projectimagediv}>
          <a href="https://balls-dropping.netlify.app/" target="_blank">
            <img
              src="/project-images/balls-dropping-desktop.png"
              className={styles.projectimg}
            />
          </a>
        </div>

        {/* project links div */}
        <div id="project-links" className={styles.projectlinks}>
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
            Visit Site
          </a>
        </div>

        {/* teck stack unordered list */}
        <div id="tech-stack" className={styles.techstack}>
          <p className={styles.textb}>Tech Stack:</p>

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

        <div id="title-and-description" className={styles.titleanddescription}>
          <p className={styles.subheading}>An Audio Visual App</p>
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
          </div>
        </div>
      </div>
    </main>
  );
}
