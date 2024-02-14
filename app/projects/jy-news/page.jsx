import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './ballsproj.module.css';

export default function jyNews() {
  const techSkills = [
    'Javascript',
    'React',
    'Express.js',
    'Jest',
    'PostgreSQL',
    'Node.js',
  ];

  return (
    <main className={styles.main}>
      <PageHeading title={'JY News'} />

      <div className={styles.projectcontainer}>
        {/* image div */}
        <div id="project-image-div" className={styles.projectimagediv}>
          <a
            href="http://jy-news-fullstack-project.netlify.app/"
            target="_blank"
          >
            <img
              src="/project-images/jy-news-desktop-and-mobile.png"
              className={styles.projectimg}
            />
          </a>
        </div>

        {/* project links div */}
        <div id="project-links" className={styles.projectlinks}>
          <a
            className={styles.plink}
            href="https://github.com/jamesyuill/jy-news"
            target="_blank"
          >
            Github (be)
          </a>

          <a
            className={styles.plink}
            href="https://github.com/jamesyuill/fe-jy-news"
            target="_blank"
          >
            Github (be)
          </a>

          <a
            className={styles.plink}
            href="https://jy-news-fullstack-project.netlify.app"
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
          <p className={styles.subheading}>
            Northcoders Solo Full Stack Project
          </p>
          <div id="project-info" className={styles.projectinfo}>
            <div id="description">
              <p className={styles.text}>
                - Successfully built a RESTful API and back end server using
                Express, SQL and PostGres.
              </p>
              <p className={styles.text}>
                - It was developed using TDD, using Jest, Jest-Sorted and
                Supertest.
              </p>
              <p className={styles.text}>
                - We utilised Husky to prevent pushing any commits with failing
                code.
              </p>
              <p className={styles.text}>
                – Successfully developed a UI that interacts with our Back End
                Server.
              </p>
              <p className={styles.text}>
                - This was developed in React and used additional libraries
                React-Router-Dom for the routing and Axios for the API requests.
              </p>
              <p className={styles.text}>
                - The project was mainly focused on functionality, but we were
                required to keep in mind the application’s responsiveness and
                accessibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
