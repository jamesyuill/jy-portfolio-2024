import CircleInter from './CircleInter';
import SquareInter from './SquareInter';

import styles from './backsvg.module.css';

export default function BackgroundSVG() {
  const animationLookup = {
    0: <CircleInter />,
    1: <SquareInter />,
  };
  return (
    <div className={styles.backgrounddiv}>
      {animationLookup[Math.floor(Math.random() * 2)]}
    </div>
  );
}
