import Link from 'next/link';

import {
  descriptionText,
  input,
  loginButton,
  loginContainer,
  loginText,
} from '@/app/login/page.css';

export default function Login() {
  return (
    <form className={loginContainer}>
      <div className={loginText}>로그인</div>

      <Link className={descriptionText} href="/register">
        아직 계정이 없으신가요?
      </Link>

      <div>
        <input
          className={input}
          type="email"
          placeholder="이메일을 입력해주세요."
          autoFocus
        />
      </div>

      <div>
        <input
          className={input}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>

      <div>
        <button className={loginButton} type="submit">
          로그인
        </button>
      </div>
    </form>
  );
}
