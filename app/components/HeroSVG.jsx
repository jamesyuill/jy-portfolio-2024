'use client';
import React from 'react';

export default function HeroSVG() {
  const windHeight = window.innerHeight;
  const windWidth = window.innerWidth;

  const circlesArray = [];

  const potentialColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  for (let i = 0; i < 20; i++) {
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
              key={index}
              r={item.radius}
              cx={item.x}
              cy={item.y}
              fill={item.color}
            />
          );
        })}
      </svg>
    </div>
  );
}
