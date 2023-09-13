import * as styles from './Banner.css';

export default function Banner() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Real World Blog</h1>
      <p className={styles.subTitle}>A place to share your knowledge.</p>
    </div>
  );
}
