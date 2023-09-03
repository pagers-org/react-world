import Button from '@/composables/Button';
import Input from '@/composables/Input';
import { question, title } from '@/styles/account.css';
import { buttonBox, container, flexBox } from '@/styles/layout.css';

const LoginPage = () => {
  return (
    <main className={container}>
      <div className={title}>Sign in</div>
      <div className={question}>Need an account?</div>
      <div className={flexBox}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <div className={buttonBox}>
          <Button>Sign in</Button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
