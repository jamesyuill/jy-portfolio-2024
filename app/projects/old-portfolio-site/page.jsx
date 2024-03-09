import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './oldportfolio.module.css';
import Link from 'next/link';
import { RxArrowLeft } from 'react-icons/rx';
import FullPageFade from '@/app/components/FullPageFade';

export default function oldPortfolioSite() {
  const techSkills = [
    'Javascript',
    'React Three/Fiber',
    'Three.js',
    'Email.js',
    'GSAP',
    'gltfjsx',
  ];

  return (
    <main className={styles.main}>
      <PageHeading title={'Portfolio Website 2023'} />
      <FullPageFade />

      <div className={styles.projectcontainer}>
        {/* image div */}
        <div id="project-image-div" className={styles.projectimagediv}>
          <a href="https://jy-portfolio-2023.netlify.app/" target="_blank">
            <img
              src="/project-images/old-portfolio-2023-desktop-mobile.png"
              className={styles.projectimg}
            />
          </a>
        </div>

        {/* project links div */}
        <div id="project-links" className={styles.projectlinks}>
          <a
            className={styles.plink}
            href="https://github.com/jamesyuill/jy-portfolio"
            target="_blank"
          >
            Github
          </a>

          <a
            className={styles.plink}
            href="https://jy-portfolio-2023.netlify.app/"
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
            The first interation of my portfolio site
          </p>
          <div id="project-info" className={styles.projectinfo}>
            <div id="description">
              <p className={styles.text}>
                - This was built the week after completing the Northcoders
                bootcamp.
              </p>
              <p className={styles.text}>
                - I'd been messing around with Three.js for a while, but had
                fallen in love with the React way of making reusable components.
                I came across React Three/Fiber and React Three/Drei and knew
                that I wanted to make my portfolio using these libraries.
              </p>
              <p className={styles.text}>
                - It's a very simple canvas with a React website on top.
              </p>
              <p className={styles.text}>
                - Feel free to check out the Github and see for yourself!
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
