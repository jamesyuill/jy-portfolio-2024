import styles from './randomshapes.module.css';

export default function RandomShapes() {
  return (
    <div className={styles.backgroundshapes}>
      <svg className={styles.svgcanvas}>
        <circle r={100} cx={100} cy={100} fill="red" fillOpacity={0.2}></circle>
      </svg>
    </div>
  );
}
