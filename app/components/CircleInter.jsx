'use client';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CircleInter() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // gsap.set('.ball', { xPercent: -50, yPercent: -50 });
    // let targets = gsap.utils.toArray('.ball');
  }, []);

  useGSAP(() => {
    document.getElementById('ball').addEventListener('mouseenter', animate);
    document.getElementById('ball').addEventListener('mouseleave', animateOut);
    function animate() {
      gsap.to(ball, {
        duration: 0.8,
        x: 30,
        y: 30,
        // ease: 'power1.out',
        // overwrite: 'auto',
        // stagger: 0.02,
      });
    }
    function animateOut() {
      gsap.to(ball, {
        duration: 0.8,
        x: 0,
        y: 0,
        // ease: 'power1.out',
        // overwrite: 'auto',
        // stagger: 0.02,
      });
    }
  }, [windowSize]);

  return (
    <div>
      <svg height={windowSize.height} width={windowSize.width}>
        <circle
          id="ball"
          className="ball"
          r={100}
          cx={350}
          cy={200}
          fill="red"
        />
      </svg>
    </div>
  );
}
