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
      />
      <ProjectCard
        title={'What Carb?'}
        imgUrl={'what-carb-desktop-and-mobile.png'}
        disc={'MERN Dish Selector App'}
      />
      <ProjectCard
        title={'Guess What?!'}
        imgUrl={'guess-what-desktop.png'}
        disc={'Northcoders Final Course Project'}
      />

      <ProjectCard
        title={'Etsy Scraper to Instagram Poster'}
        imgUrl={'etsy-insta-scraper-big.png'}
        disc={'An Automation Project'}
      />
      <ProjectCard
        title={'JY News'}
        imgUrl={'jy-news-desktop-and-mobile.png'}
        disc={'Northcoders Solo Full Stack Project'}
      />
      <ProjectCard
        title={'cable tv Website'}
        imgUrl={'cable-tv-website.png'}
        disc={'My Introduction to Three and GSAP'}
      />
    </div>
  );
}
