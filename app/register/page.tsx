'use client';

import { createAccount } from '@/actions/actions';
import { form, question, title } from '@/styles/account.css';
import { input, container, flexRow, flexCenter } from '@/styles/common.css';
import { button, buttonBox } from '@/styles/layout.css';

const RegisterPage = () => {
  return (
    <section className={`${container} ${flexRow} ${flexCenter}`}>
      <div className={title}>Sign up</div>
      <div className={question}>Have an account?</div>
      <form action={createAccount} className={form}>
        <input type="text" name="username" className={input} placeholder="Username" required />
        <input type="email" name="email" className={input} placeholder="Email" required />
        <input type="password" name="password" className={input} placeholder="Password" required />
        <div className={buttonBox}>
          <input type="submit" className={button} value="Sign up" />
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
