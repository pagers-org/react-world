'use client';

import * as styles from './error.css';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  return (
    <div className={styles.container}>
      일시적으로 서비스에 에러가 발생했어요.
      <div>
        <button type="button" onClick={reset}>
          재시도
        </button>
      </div>
    </div>
  );
}
