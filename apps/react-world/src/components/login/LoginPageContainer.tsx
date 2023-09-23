import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import useLogin from '@hooks/useLogin';

const LoginPageContainer = () => {
  const { loginError, loginStatus, handleLogin } = useLogin();

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <LoginHeader />
            <LoginForm
              loginError={loginError}
              loginStatus={loginStatus}
              onLoginSubmit={handleLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageContainer;
