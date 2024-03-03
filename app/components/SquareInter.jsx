'use client';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './squareinter.module.css';

export default function CircleInter() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  let squareArray = [];
  const potentialColors = ['#0802A3', '#FF4B91', '#FF7676', '#FFCD4B'];

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useGSAP(() => {
    const squares = gsap.utils.toArray('#square');

    squares.forEach((square) => {
      gsap.to(square, {
        duration: 1,
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-20, 20),
        ease: 'easeOut',
      });

      squares.forEach((square) => {
        square.addEventListener('mouseenter', (e) => {
          gsap.to(e.target, {
            duration: 1,
            x: gsap.utils.random(-40, 40),
            y: gsap.utils.random(-40, 40),
            width: 80,
            height: 80,
            fillOpacity: 1,
            ease: 'easeOut',
          });
        });

        square.addEventListener('mouseleave', (e) => {
          gsap.to(e.target, {
            duration: 1,
            x: gsap.utils.random(-20, 20),
            y: gsap.utils.random(-20, 20),
            width: 60,
            height: 60,
            fillOpacity: 0.9,
            ease: 'easeOut',
          });
        });
      });
    });
  }, [windowSize]);

  if (window.innerWidth) {
    squareArray = [];
    for (let y = 0; y < windowSize.height; y += 60) {
      for (let x = 0; x < windowSize.width + 20; x += 60) {
        let randomChoice = Math.floor(Math.random() * potentialColors.length);
        let randomColor = potentialColors[randomChoice];
        squareArray.push({
          x: x,
          y: y,
          width: 60,
          height: 60,
          color: randomColor,
        });
      }
    }
  }

  return (
    <div>
      <svg className={styles.svgcanvas}>
        {squareArray.map((item, index) => {
          return (
            <rect
              id="square"
              key={index}
              width={item.width}
              height={item.height}
              x={item.x}
              y={item.y}
              fill={item.color}
              fillOpacity={0.9}
            ></rect>
          );
        })}
      </svg>
    </div>
  );
}
