'use client';

// import { login } from '@/actions/actions';
import useUserStore from '@/stores/useUserStore';
import { question, title } from '@/styles/account.css';
import { input, container } from '@/styles/common.css';
import { button, buttonBox, flexBox } from '@/styles/layout.css';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { login } = useUserStore();
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(e);
    router.push('/');
  };
  return (
    <main className={container}>
      <div className={title}>Sign in</div>
      <div className={question}>Need an account?</div>
      <form onSubmit={handleSubmit}>
        <div className={flexBox}>
          <input type="email" name="email" placeholder="Email" className={input} />
          <input type="password" name="password" placeholder="Password" className={input} />
          <div className={buttonBox}>
            <input type="submit" value={'Sign in'} className={button} />
          </div>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
