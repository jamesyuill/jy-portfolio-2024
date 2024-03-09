import React from 'react';
import ProjectCard from './ProjectCard';

import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className={styles.projectscontainer}>
      <ProjectCard
        title={'Balls Dropping'}
        imgUrl={'balls-dropping-desktop.png'}
        disc={'An Audio Visual App'}
        endpoint={'balls-dropping'}
      />
      <ProjectCard
        title={'What Carb?'}
        imgUrl={'what-carb-desktop-and-mobile.png'}
        disc={'MERN Dish Selector App'}
        endpoint={'what-carb'}
      />
      <ProjectCard
        title={'Guess What?!'}
        imgUrl={'guess-what-desktop.png'}
        disc={'Northcoders Final Course Project'}
        endpoint={'guess-what'}
      />

      <ProjectCard
        title={'Etsy Scraper to Instagram Poster'}
        imgUrl={'etsy-insta-scraper-big.png'}
        disc={'An Automation Project'}
        endpoint={'etsy-insta-scraper'}
      />
      <ProjectCard
        title={'React Three/Fiber Portfolio Site'}
        imgUrl={'old-portfolio-2023-desktop-mobile.png'}
        disc={'The first version of my portfolio site'}
        endpoint={'old-portfolio-site'}
      />
      <ProjectCard
        title={'JY News'}
        imgUrl={'jy-news-desktop-and-mobile.png'}
        disc={'Northcoders Solo Full Stack Project'}
        endpoint={'jy-news'}
      />
      <ProjectCard
        title={'cable tv Website'}
        imgUrl={'cable-tv-website.png'}
        disc={'My Introduction to Three and GSAP'}
        endpoint={'cable-tv-website'}
      />
    </div>
  );
}
