import styles from './randomshapes.module.css';

export default function RandomShapes() {
  const potentialColors = ['#0802A3', '#FF4B91', '#FF7676', '#FFCD4B'];

  let randomChoice = Math.floor(Math.random() * potentialColors.length);
  let randomColor = potentialColors[randomChoice];

  return (
    <div className={styles.backgroundshapes}>
      <svg className={styles.svgcanvas}>
        <circle
          r={100}
          cx={40}
          cy={200}
          fill={randomColor}
          fillOpacity={0.5}
        ></circle>
        <circle
          r={100}
          cx={400}
          cy={600}
          fill={randomColor}
          fillOpacity={0.5}
        ></circle>
      </svg>
    </div>
  );
}
