import React from 'react';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.rowOne}>
        <div>
          <p className={styles.text}>Hi I'm James</p>
          <p className={styles.text}>
            After a successful career as a music producer, working and touring
            with some amazing artists, I'm applying the same creative skills to
            software engineering.
          </p>
        </div>
        <img
          className={styles.img}
          src="./images/jy-profile-image.jpg"
          alt="James in the studio messing with synths"
        />
        <div className={styles.rowTwo}>
          <p className={styles.text}>
            I was known for playing live shows that would range from stripped
            back acoustic to relatively heavy techno. I would spend hours
            programming intricate light shows, triggered by midi and even
            developed a real-time bullet-time rig.
          </p>
        </div>
        <div className={styles.rowThree}>
          <p className={styles.text}>
            After teaching myself coding through experimenting with libraries
            Three.js and P5.js. I enrolled in the Northcoders Software
            Development bootcamp, where I learned full stack development.
          </p>
          <p className={styles.text}>
            I'm now no longer touring and spend my time building apps, creating
            art in blender, or learning new libraries.
          </p>
        </div>
      </div>
    </div>
  );
}
