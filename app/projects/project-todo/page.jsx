import React from 'react';
import PageHeading from '../../components/PageHeading';
import styles from './projecttodo.module.css';
import Link from 'next/link';
import { RxArrowLeft } from 'react-icons/rx';
import FullPageFade from '@/app/components/FullPageFade';

export default function projectTodo() {
  const techSkills = [
    'Typescript',

    'Next',
    'NextAuth',
    'Mongoose',
    'MongoDB',
    'React-Beautiful-DnD',
    'Bcrypt',
    'Jest',
    'React Testing Library',
  ];

  return (
    <main className={styles.main}>
      <PageHeading title={'Project Todo'} />
      <FullPageFade />

      <div className={styles.projectcontainer}>
        {/* image div */}
        <div id="project-image-div" className={styles.projectimagediv}>
          <a
            href="https://github.com/jamesyuill/crm-project-ts"
            target="_blank"
          >
            <img
              src="/project-images/project-todo-desktop.png"
              className={styles.projectimg}
            />
          </a>
        </div>

        {/* project links div */}
        <div id="project-links" className={styles.projectlinks}>
          <a
            className={styles.plink}
            href="https://github.com/jamesyuill/crm-project-ts"
            target="_blank"
          >
            Github
          </a>

          {/* <a
            className={styles.plink}
            href="https://balls-dropping.netlify.app/"
            target="_blank"
          >
            Visit Site
          </a> */}
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
          <p className={styles.subheading}>A Trello Style App</p>
          <div id="project-info" className={styles.projectinfo}>
            <div id="description">
              <p className={styles.text}>
                - This is a project I build to get me familiar with NextAuth and
                creating a signup/login style dashboard. It's also a project
                where I used Typescript within Next for the first time.
              </p>
              <p className={styles.text}>
                - I love everything about Trello, so for me the goal was to
                create a collection of todo lists that could be moved around
                including the items inside. So you can move one todo item into
                another collection.
              </p>
              <p className={styles.text}>
                - The drag and drop functionality took a bit of time to solve
                just because there are a few libraries that one can use. I opted
                for Beautiful React DnD.
              </p>
              <p className={styles.text}>
                - I used MongoDB to store the username data and the todo list
                data
              </p>
              <p className={styles.text}>
                - This is very much a work in progress as I need to sort out how
                responsive it is. I need a seed function for the data too. I can
                imagine when I host it people will be deleting things left,
                right and centre!
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
