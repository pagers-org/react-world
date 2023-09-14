import * as styles from '@/app/loading.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
}
