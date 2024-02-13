import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './wcproj.module.css';

export default function whatCarb() {
  const techSkills = ['Javascript', 'React', 'MongoDB', 'Express', 'Node'];

  return (
    <main className={styles.main}>
      <PageHeading title={'What Carb?'} />

      <div id="project-image" className={styles.imageandtech}>
        <a href="https://what-carb.netlify.app/" target="_blank">
          <img
            src="/project-images/what-carb-desktop-and-mobile.png"
            className={styles.projectimage}
          />
        </a>

        <div id="project-tech" className={styles.projecttechandlinks}>
          {/* map over project skills */}

          <div id="project-links" className={styles.projectlinks}>
            {/* githubs etc */}
            <a
              className={styles.plink}
              href="https://github.com/jamesyuill/what-carb-be"
              target="_blank"
            >
              <p>Github (be)</p>
            </a>
            <a
              className={styles.plink}
              href="https://github.com/jamesyuill/what-carb-react"
              target="_blank"
            >
              <p>Github (fe)</p>
            </a>
            <a
              className={styles.plink}
              href="https://what-carb.netlify.app/"
              target="_blank"
            >
              <p>Visit Site</p>
            </a>
          </div>

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
        </div>
      </div>

      <div id="project-container" className={styles.projectcontainer}>
        <p className={styles.subheading}>A MERN Dish Selector App</p>
        <div id="project-info" className={styles.projectinfo}>
          <div id="description">
            <p className={styles.text}>
              - Here is a reworked version of an old app idea I had.
            </p>
            <p className={styles.text}>
              - You can get a meal suggestion based on the carbohydrate you
              would like to eat.
            </p>
            <p className={styles.text}>
              - I'm using a MongoDB database to store the dishes. A user can
              view, update, add and delete a dish.
            </p>
            <p className={styles.text}>
              - To learn more about the app visit the github links below.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}