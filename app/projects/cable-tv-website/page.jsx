import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './ctvwproj.module.css';

export default function cabletvWebsite() {
  const techSkills = ['Javascript', 'Three.js', 'GSAP'];

  return (
    <main className={styles.main}>
      <PageHeading title={'cable tv Website'} />

      <div id="project-image" className={styles.imageandtech}>
        <a href="https://cable-tv-website.netlify.app/" target="_blank">
          <img
            src="/project-images/cable-tv-website.png"
            className={styles.projectimage}
          />
        </a>

        <div id="project-tech" className={styles.projecttechandlinks}>
          {/* map over project skills */}

          <div id="project-links" className={styles.projectlinks}>
            {/* githubs etc */}

            <a
              className={styles.plink}
              href="https://github.com/jamesyuill/cabletv-three-site"
              target="_blank"
            >
              <p>Github</p>
            </a>
            <a
              className={styles.plink}
              href="https://cable-tv-website.netlify.app/"
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
        <p className={styles.subheading}>My Introduction to Three and GSAP</p>
        <div id="project-info" className={styles.projectinfo}>
          <div id="description">
            <p className={styles.text}>
              - Created a 3d based website using vanilla Three.js.
            </p>
            <p className={styles.text}>
              - Utilised the animation library GSAP to achieve the switch in
              focus between 3d models.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
