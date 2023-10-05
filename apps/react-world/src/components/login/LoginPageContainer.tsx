import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import useLogin from '@/hooks/useLogin';

const LoginPageContainer = () => {
  const { loginError, loginStatus, handleLogin } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus === 'success') {
      navigate('/'); // 홈페이지로 리다이렉트
    }
  }, [loginStatus, navigate]);

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
