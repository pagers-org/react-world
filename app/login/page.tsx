import LoginForm from '@/components/account/LoginForm';
import { question, title } from '@/styles/account.css';
import { container, flexCenter, flexRow } from '@/styles/common.css';

const LoginPage = () => {
  return (
    <section className={`${container} ${flexRow} ${flexCenter}`}>
      <div className={title}>Sign in</div>
      <div className={question}>Need an account?</div>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
