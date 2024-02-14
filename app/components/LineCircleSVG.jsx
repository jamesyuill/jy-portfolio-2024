'use client';
import React, { useEffect, useState } from 'react';
import styles from './linecirclesvg.module.css';

export default function LineCircleSVG() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  //   const windHeight = window.innerHeight;
  //   const windWidth = window.innerWidth;
  const potentialColors = ['#0802A3', '#FF4B91', '#FF7676', '#FFCD4B'];

  let lineArray = [];
  let radius = windowSize.width / 4;
  for (let angle = 0; angle < 20; angle++) {
    let randomChoice = Math.floor(Math.random() * potentialColors.length);
    let randomColor = potentialColors[randomChoice];
    let randomWidth = Math.floor(Math.random() * 15);
    let randomSize = Math.floor(Math.random() * 60);
    let x = radius * Math.cos(angle) + radius * 2;
    let y = radius * Math.sin(angle) + radius * 2;

    x += Math.floor(Math.random() * 20);
    y += Math.floor(Math.random() * 20);
    lineArray.push({
      x: x || 10,
      y: y || 10,
      color: randomColor,
      width: randomWidth,

      size: randomSize,
    });
  }
  return (
    <div>
      <svg height={windowSize.height} width={windowSize.width}>
        {lineArray.map((line, index) => {
          return (
            <circle
              className={styles.lineItem}
              key={index}
              style={{ '--order': `${index}` }}
              cx={line.x}
              cy={line.y}
              r={line.size}
              fill={line.color}
              fillOpacity={0.8}
            />
          );
        })}
      </svg>
    </div>
  );
}
