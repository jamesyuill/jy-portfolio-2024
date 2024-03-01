'use client';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './circleinter.module.css';

export default function CircleInter() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  let ballArray = [];

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // gsap.set('.ball', { xPercent: -50, yPercent: -50 });
    // let targets = gsap.utils.toArray('.ball');

    // -------- create the ball grid ----------
  }, []);

  useGSAP(() => {
    // document.getElementById('ball').addEventListener('mouseenter', animate);
    // document.getElementById('ball').addEventListener('mouseleave', animateOut);

    function animate() {
      gsap.to(ball, {
        duration: 0.8,
        x: gsap.utils.random(-10, 10),
        y: gsap.utils.random(-10, 10),
        ease: 'power1.out',
        // overwrite: 'auto',
        // stagger: 0.02,
      });
    }
    function animateOut() {
      gsap.to(ball, {
        duration: 0.8,
        x: 0,
        y: 0,
        ease: 'power1.out',
        // overwrite: 'auto',
        // stagger: 0.02,
      });
    }
  }, [windowSize]);

  if (window.innerWidth) {
    ballArray = [];
    for (let y = 0; y < windowSize.height; y += 20) {
      for (let x = 0; x < windowSize.width; x += 20) {
        ballArray.push({
          x: x,
          y: y,
        });
      }
    }
  }

  return (
    <div>
      <svg className={styles.svgcanvas}>
        {ballArray.map((item, index) => {
          return (
            <circle
              id="ball"
              key={index}
              r={10}
              cx={item.x}
              cy={item.y}
              fill="red"
            ></circle>
          );
        })}
      </svg>
    </div>
  );
}
