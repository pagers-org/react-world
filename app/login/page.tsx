import Link from 'next/link';

import * as styles from '@/app/login/page.css';

import { ROUTES } from '@/src/constants/route';

export default function Login() {
  return (
    <form className={styles.loginContainer}>
      <div className={styles.loginText}>로그인</div>
      <Link className={styles.descriptionText} href={ROUTES.REGISTER}>
        아직 계정이 없으신가요?
      </Link>
      <div>
        <input
          className={styles.input}
          type="email"
          placeholder="이메일을 입력해주세요."
          autoFocus
        />
      </div>
      <div>
        <input
          className={styles.input}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div>
        <button className={styles.loginButton} type="submit">
          로그인
        </button>
      </div>
    </form>
  );
}
