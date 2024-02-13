'use client';
import React, { useEffect, useState } from 'react';
import styles from './herosvg.module.css';

export default function HeroSVG() {
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

  let circlesArray = [];

  for (let i = 0; i < 30; i++) {
    let randomPosX = Math.random() * windWidth;
    let randomPosY = Math.random() * windHeight;
    let randomChoice = Math.floor(Math.random() * potentialColors.length);
    let randomColor = potentialColors[randomChoice];
    let randomRadius = Math.floor(Math.random() * 100);
    circlesArray.push({
      x: randomPosX,
      y: randomPosY,
      color: randomColor,
      radius: randomRadius,
    });
  }

  return (
    <div>
      <svg height={windHeight} width={windWidth}>
        {circlesArray.map((item, index) => {
          return (
            <circle
              className={styles.circleItem}
              key={index}
              style={{ '--order': `${index}` }}
              r={item.radius}
              cx={item.x}
              cy={item.y}
              fill={item.color}
              fillOpacity={0.8}
            />
          );
        })}
      </svg>
    </div>
  );
}
