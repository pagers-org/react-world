import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';

const LoginPageContainer = () => {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log('handleLogin: ' + JSON.stringify(data, null, 2));
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <LoginHeader />
            <LoginForm onLoginSubmit={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageContainer;
