import FormHead from '@/components/account/FormHead';
import SignUpForm from '@/components/account/SignUpForm';
import { container, flexRow, flexCenter } from '@/styles/common.css';

const RegisterPage = () => {
  return (
    <section className={`${container} ${flexRow} ${flexCenter}`}>
      <FormHead titleText="Sign up" questionText="Have an account?" />
      <SignUpForm />
    </section>
  );
};

export default RegisterPage;
