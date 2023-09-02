import Button from '@/composables/Button';
import Input from '@/composables/Input';
import * as style from '@/styles/account.css';

const LoginPage = () => {
  return (
    <div>
      <div className={style.title}>Sign in</div>
      <div className={style.question}>Need an account?</div>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button>Sign in</Button>
    </div>
  );
};

export default LoginPage;
