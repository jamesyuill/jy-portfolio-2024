import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './eisproj.module.css';

export default function etsyInstaScraper() {
  const techSkills = [
    'Javascript',
    'Node.js',
    'Express.js',
    'Puppeteer',
    'Instagram Private API',
    'Node-Cron',
  ];

  return (
    <main className={styles.main}>
      <PageHeading title={'Etsy Scraper to Instagram Poster'} />

      <div id="project-image" className={styles.imageandtech}>
        <a
          href="https://www.instagram.com/everything_is_noise/"
          target="_blank"
        >
          <img
            src="/project-images/etsy-insta-scraper-big.png"
            className={styles.projectimage}
          />
        </a>

        <div id="project-tech" className={styles.projecttechandlinks}>
          {/* map over project skills */}

          <div id="project-links" className={styles.projectlinks}>
            {/* githubs etc */}
            <a
              className={styles.plink}
              href="https://github.com/jamesyuill/etsy-gram-scraper"
              target="_blank"
            >
              <p>Github</p>
            </a>
            <a
              className={styles.plink}
              href="https://www.etsy.com/uk/shop/EverythingIsNoise"
              target="_blank"
            >
              <p>Etsy Shop</p>
            </a>
            <a
              className={styles.plink}
              href="https://www.instagram.com/everything_is_noise/"
              target="_blank"
            >
              <p>Instagram</p>
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
        <p className={styles.subheading}>An Automation Project</p>
        <div id="project-info" className={styles.projectinfo}>
          <div id="description">
            <p className={styles.text}>
              - Built with using Puppeteer for the web scraping and
              Instagram-Private-API for the posting.
            </p>
            <p className={styles.text}>
              - The aim was to automate the task of regularly posting shop items
              from a drop shipping site to Instagram.
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
