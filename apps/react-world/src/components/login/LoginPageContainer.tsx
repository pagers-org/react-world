import LoginErrorMessage from './LoginErrorMessageList';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';

const LoginPageContainer = () => {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <LoginHeader />
            <LoginErrorMessage
              errorMessages={['That email is already taken']}
            />
            <LoginForm onLogin={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageContainer;
