'use client';

import { createAccount } from '@/actions/actions';
import { question, title } from '@/styles/account.css';
import { input } from '@/styles/common.css';
import { button, buttonBox, container, flexBox } from '@/styles/layout.css';

const RegisterPage = () => {
  return (
    <main className={container}>
      <div className={title}>Sign up</div>
      <div className={question}>Have an account?</div>
      <form action={createAccount}>
        <div className={flexBox}>
          <input type="text" name="username" className={input} placeholder="Username" required />
          <input type="email" name="email" className={input} placeholder="Email" required />
          <input type="password" name="password" className={input} placeholder="Password" required />
          <div className={buttonBox}>
            <input type="submit" className={button} value="Sign up" />
          </div>
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;
