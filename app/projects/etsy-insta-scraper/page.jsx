import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './eisproj.module.css';
import Link from 'next/link';
import { RxArrowLeft } from 'react-icons/rx';
import FullPageFade from '@/app/components/FullPageFade';

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
      <FullPageFade />

      <div className={styles.projectcontainer}>
        {/* image div */}
        <div id="project-image-div" className={styles.projectimagediv}>
          <a
            href="https://www.instagram.com/everything_is_noise/"
            target="_blank"
          >
            <img
              src="/project-images/etsy-insta-scraper-big.png"
              className={styles.projectimg}
            />
          </a>
        </div>

        {/* project links div */}
        <div id="project-links" className={styles.projectlinks}>
          <a
            className={styles.plink}
            href="https://github.com/jamesyuill/etsy-gram-scraper"
            target="_blank"
          >
            Github
          </a>

          <a
            className={styles.plink}
            href="https://www.etsy.com/uk/shop/EverythingIsNoise"
            target="_blank"
          >
            Etsy Shop
          </a>
          <a
            className={styles.plink}
            href="https://www.instagram.com/everything_is_noise/"
            target="_blank"
          >
            Instagram
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
          <p className={styles.subheading}>An Automation Project</p>
          <div id="project-info" className={styles.projectinfo}>
            <div id="description">
              <p className={styles.text}>
                - Built with using Puppeteer for the web scraping and
                Instagram-Private-API for the posting.
              </p>
              <p className={styles.text}>
                - The aim was to automate the task of regularly posting shop
                items from a drop shipping site to Instagram.
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
