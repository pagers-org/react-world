import FormHead from '@/components/account/FormHead';
import SignInForm from '@/components/account/SignInForm';
import { container, flexCenter, flexRow } from '@/styles/common.css';

const LoginPage = () => {
  return (
    <section className={`${container} ${flexRow} ${flexCenter}`}>
      <FormHead titleText="Sign in" questionText="Need an account?" />
      <SignInForm />
    </section>
  );
};

export default LoginPage;
