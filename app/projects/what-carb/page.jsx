import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './wcproj.module.css';
import Link from 'next/link';
import { RxArrowLeft } from 'react-icons/rx';
import FullPageFade from '@/app/components/FullPageFade';

export default function whatCarb() {
  const techSkills = ['Javascript', 'React', 'MongoDB', 'Express', 'Node'];

  return (
    <main className={styles.main}>
      <PageHeading title={'What Carb?'} />
      <FullPageFade />

      <div className={styles.projectcontainer}>
        {/* image div */}
        <div id="project-image-div" className={styles.projectimagediv}>
          <a href="https://what-carb.netlify.app/" target="_blank">
            <img
              src="/project-images/what-carb-desktop-and-mobile.png"
              className={styles.projectimg}
            />
          </a>
        </div>

        {/* project links div */}
        <div id="project-links" className={styles.projectlinks}>
          <a
            className={styles.plink}
            href="https://github.com/jamesyuill/what-carb-be"
            target="_blank"
          >
            Github (be)
          </a>

          <a
            className={styles.plink}
            href="https://github.com/jamesyuill/what-carb-react"
            target="_blank"
          >
            Github (fe)
          </a>

          <a
            className={styles.plink}
            href="https://what-carb.netlify.app/"
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
      </div>
      <Link href="/projects" className={styles.backbtn}>
        <RxArrowLeft />
        Back to Projects
      </Link>
    </main>
  );
}
