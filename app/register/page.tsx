'use client';
import { register } from '@/services/account';
import { question, title } from '@/styles/account.css';
import { button, buttonBox, container, flexBox, input } from '@/styles/layout.css';

const RegisterPage = () => {
  const handleSubmit = async () => {
    const res = await register();
    console.log(res);
  };
  return (
    <main className={container}>
      <div className={title}>Sign up</div>
      <div className={question}>Have an account?</div>
      <div className={flexBox}>
        <input type="text" className={input} placeholder="Username" />
        <input type="text" className={input} placeholder="Email" />
        <input type="text" className={input} placeholder="Password" />
        <div className={buttonBox}>
          <input type="submit" className={button} value="Sign up" />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
