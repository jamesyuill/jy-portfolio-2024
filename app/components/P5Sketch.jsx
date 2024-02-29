'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

export default function P5Sketch() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const p5 = dynamic(() => import('p5'), { ssr: false });
    }
  }, []);

  return <div>P5Sketch</div>;
}
