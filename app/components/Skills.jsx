import React from 'react';
import styles from './skills.module.css';

export default function Skills() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.subheading}>LANGUAGES</h3>
      </div>
      <div>
        <ul className={styles.unordered}>
          <li className={styles.li}>
            <img className={styles.img} src="/images/javascript.png" />
            JAVASCRIPT
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/typescript.png" />
            TYPESCRIPT
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/python.png" />
            PYTHON (currently learning)
          </li>
        </ul>
        <div>
          <h3 className={styles.subheading}>FRAMEWORKS AND LIBRARIES</h3>
        </div>
        <ul className={styles.unordered}>
          <li className={styles.li}>
            <img className={styles.img} src="/images/react.png" />
            REACT
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/next.png" />
            NEXT
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/html5.png" />
            HTML5
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/css.png" />
            CSS
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/three.png" />
            THREE
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/p5.png" />
            P5
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/nodejs.png" />
            NODE
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/express.png" />
            EXPRESS
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/graphql.png" />
            GRAPHQL
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/sql.png" />
            SQL
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/mongodb.png" />
            MONGODB
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/jest.png" />
            JEST
          </li>
        </ul>
        <div>
          <h3 className={styles.subheading}>SOFTWARE</h3>
        </div>
        <ul className={styles.unordered}>
          <li className={styles.li}>
            <img className={styles.img} src="/images/touchdesigner.png" />
            TOUCHDESIGNER
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/blender.png" />
            BLENDER
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/abletonlive.png" />
            ABLETON LIVE
          </li>
          <li className={styles.li}>
            <img className={styles.img} src="/images/protools.png" />
            PRO TOOLS
          </li>
        </ul>
      </div>
    </div>
  );
}
