import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './ctvwproj.module.css';

export default function cabletvWebsite() {
  const techSkills = ['Javascript', 'Three.js', 'GSAP'];

  return (
    <main className={styles.main}>
      <PageHeading title={'cable tv Website'} />

      <div className={styles.projectcontainer}>
        {/* image div */}
        <div id="project-image-div" className={styles.projectimagediv}>
          <a href="https://cable-tv-website.netlify.app/" target="_blank">
            <img
              src="/project-images/cable-tv-website.png"
              className={styles.projectimg}
            />
          </a>
        </div>

        {/* project links div */}
        <div id="project-links" className={styles.projectlinks}>
          <a
            className={styles.plink}
            href="https://github.com/jamesyuill/cabletv-three-site"
            target="_blank"
          >
            Github
          </a>

          <a
            className={styles.plink}
            href="https://cable-tv-website.netlify.app/"
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
      </div>
    </main>
  );
}
