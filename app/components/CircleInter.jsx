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
  const potentialColors = ['#0802A3', '#FF4B91', '#FF7676', '#FFCD4B'];

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  if (window.innerWidth) {
    ballArray = [];
    for (let y = 0; y < windowSize.height; y += 60) {
      for (let x = 0; x < windowSize.width; x += 60) {
        let randomChoice = Math.floor(Math.random() * potentialColors.length);
        let randomColor = potentialColors[randomChoice];
        ballArray.push({
          x: x,
          y: y,
          color: randomColor,
        });
      }
    }
  }

  useGSAP(() => {
    const balls = gsap.utils.toArray('#ball');

    balls.forEach((ball) => {
      gsap.to(ball, {
        duration: 1,
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-20, 20),
        ease: 'easeOut',
      });

      balls.forEach((ball) => {
        ball.addEventListener('mouseenter', (e) => {
          gsap.to(e.target, {
            duration: 1,
            x: gsap.utils.random(-40, 40),
            y: gsap.utils.random(-40, 40),
            r: 60,
            fillOpacity: 1,
            ease: 'easeOut',
          });
        });

        ball.addEventListener('mouseleave', (e) => {
          gsap.to(e.target, {
            duration: 1,
            x: gsap.utils.random(-20, 20),
            y: gsap.utils.random(-20, 20),
            r: 40,
            fillOpacity: 0.9,
            ease: 'easeOut',
          });
        });
      });
    });
  }, [windowSize]);

  return (
    <div>
      <svg className={styles.svgcanvas}>
        {ballArray.map((item, index) => {
          return (
            <circle
              id="ball"
              key={index}
              r={40}
              cx={item.x}
              cy={item.y}
              fill={item.color}
              fillOpacity={0.9}
            ></circle>
          );
        })}
      </svg>
    </div>
  );
}
