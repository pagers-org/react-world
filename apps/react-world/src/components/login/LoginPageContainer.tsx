import { useState } from 'react';
import LoginErrorMessage from './LoginErrorMessageList';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import type { FieldErrors } from 'react-hook-form';

const LoginPageContainer = () => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleLogin = (data: { email: string; password: string }) => {
    console.log(data);
  };

  const handleErrors = (errors: FieldErrors) => {
    const newErrors: string[] = [];

    if (
      errors.email &&
      typeof errors.email.message === 'string' &&
      !errorMessages.includes(errors.email.message)
    ) {
      newErrors.push(errors.email.message);
    }

    const allErrors = [...errorMessages, ...newErrors];
    const uniqueErrors = Array.from(new Set(allErrors));

    setErrorMessages(uniqueErrors);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <LoginHeader />
            <LoginErrorMessage errorMessages={errorMessages} />
            <LoginForm onLogin={handleLogin} onError={handleErrors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageContainer;
