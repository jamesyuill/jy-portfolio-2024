'use client';
import React, { useEffect, useState } from 'react';
import styles from './linesvg.module.css';

export default function LineSVG() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
  }, []);

  const windHeight = window.innerHeight;
  const windWidth = window.innerWidth;
  const potentialColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  let lineArray = [];
  for (let i = 0; i < windWidth; i += 30) {
    let randomChoice = Math.floor(Math.random() * potentialColors.length);
    let randomColor = potentialColors[randomChoice];
    let randomWidth = Math.floor(Math.random() * 20);
    lineArray.push({
      x1: i,
      y1: 0,
      x2: i,
      y2: 500,
      color: randomColor,
      width: randomWidth,
    });
  }

  return (
    <div>
      <svg height={windHeight} width={windWidth}>
        {lineArray.map((line, index) => {
          return (
            <line
              className={styles.lineItem}
              key={index}
              style={{ '--order': `${index}` }}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={line.color}
              strokeWidth={line.width}
            />
          );
        })}
      </svg>
    </div>
  );
}
