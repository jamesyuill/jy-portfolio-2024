import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './gwproj.module.css';
import Link from 'next/link';
import { RxArrowLeft } from 'react-icons/rx';
import FullPageFade from '@/app/components/FullPageFade';

export default function guessWhat() {
  const techSkills = [
    'Javascript',
    'Next.js',
    'Socket.io',
    'Express.js',
    'Jest',
    'MongoDB',
    'Node.js',
  ];

  return (
    <main className={styles.main}>
      <PageHeading title={'Guess What?!'} />
      <FullPageFade />

      <div className={styles.projectcontainer}>
        {/* image div */}
        <div id="project-image-div" className={styles.projectimagediv}>
          <a href="https://guess-what-gitkermit.netlify.app/" target="_blank">
            <img
              src="/project-images/guess-what-desktop.png"
              className={styles.projectimg}
            />
          </a>
        </div>

        {/* project links div */}
        <div id="project-links" className={styles.projectlinks}>
          <a
            className={styles.plink}
            href="https://github.com/PabloJulianRial/guess-what-be"
            target="_blank"
          >
            Github (be)
          </a>
          <a
            className={styles.plink}
            href="https://github.com/jamesyuill/guess-what-fe"
            target="_blank"
          >
            Github (fe)
          </a>

          <a
            className={styles.plink}
            href="https://guess-what-gitkermit.netlify.app/"
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
          <p className={styles.subheading}>Northcoders Final Course Project</p>
          <div id="project-info" className={styles.projectinfo}>
            <div id="description">
              <p className={styles.text}>
                - Created a full stack gaming app, in 10 days with 5 other
                developers.
              </p>
              <p className={styles.text}>
                - A play on the classic Guess Who, players can select a yes/no
                question to ask about their opponent's card.
              </p>
              <p className={styles.text}>
                - Our MVP was a single player game, but with the use of
                socket.io we managed to get a two player game working.
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
