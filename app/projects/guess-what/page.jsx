import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './gwproj.module.css';

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

      <div id="project-image" className={styles.imageandtech}>
        <a href="https://guess-what-gitkermit.netlify.app/" target="_blank">
          <img
            src="/project-images/guess-what-desktop.png"
            className={styles.projectimage}
          />
        </a>

        <div id="project-tech" className={styles.projecttechandlinks}>
          {/* map over project skills */}

          <div id="project-links" className={styles.projectlinks}>
            {/* githubs etc */}
            <a
              className={styles.plink}
              href="https://github.com/PabloJulianRial/guess-what-be"
              target="_blank"
            >
              <p>Github (be)</p>
            </a>
            <a
              className={styles.plink}
              href="https://github.com/jamesyuill/guess-what-fe"
              target="_blank"
            >
              <p>Github (fe)</p>
            </a>
            <a
              className={styles.plink}
              href="https://guess-what-gitkermit.netlify.app/"
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
              - Our MVP was a single player game, but with the use of socket.io
              we managed to get a two player game working.
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
