import styles from './randomshapes.module.css';

export default function RandomShapes() {
  const potentialColors = ['#0802A3', '#FF4B91', '#FF7676', '#FFCD4B'];

  let randomChoice = Math.floor(Math.random() * potentialColors.length);
  let randomColor = potentialColors[randomChoice];

  const shapeOne = {
    r: Math.floor(Math.random() * (120 - 50 + 1)) + 50,
    cx: Math.floor(Math.random() * (150 - 80 + 1)) + 80,
    cy: Math.floor(Math.random() * 300),
  };

  const shapeTwo = {
    r: Math.floor(Math.random() * 100),
    cx: Math.floor(Math.random() * (500 - 300 + 1)) + 300,
    cy: Math.floor(Math.random() * (600 - 400 + 1)) + 400,
  };

  const shapeThree = {
    r: Math.floor(Math.random() * 100),
    cx: Math.floor(Math.random() * (500 - 300 + 1)) + 300,
    cy: Math.floor(Math.random() * (700 - 600 + 1)) + 600,
  };

  return (
    <div className={styles.backgroundshapes}>
      <svg className={styles.svgcanvas}>
        <circle
          r={shapeOne.r}
          cx={shapeOne.cx}
          cy={shapeOne.cy}
          fill={randomColor}
          fillOpacity={0.5}
        ></circle>
        <circle
          r={shapeTwo.r}
          cx={shapeTwo.cx}
          cy={shapeTwo.cy}
          fill={randomColor}
          fillOpacity={0.5}
        ></circle>
        <circle
          r={shapeThree.r}
          cx={shapeThree.cx}
          cy={shapeThree.cy}
          fill={randomColor}
          fillOpacity={0.5}
        ></circle>
      </svg>
    </div>
  );
}
