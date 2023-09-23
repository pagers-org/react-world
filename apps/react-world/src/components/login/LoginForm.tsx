import type { LoginUserErrors } from '@apis/login/LoginService.types';
import type { LoginStatus } from '@hooks/useLogin';
import { useForm } from 'react-hook-form';
import { LoginErrorMessage, StyledLoginButton } from './LoginForm.styled';
import { type ReactNode } from 'react';

/*
- ^로 시작합니다.
- A-Z, 0-9, ., %, +, -와 같은 문자나 숫자가 하나 이상 있어야 합니다.
- @ 문자가 있어야 합니다.
- 다시 A-Z, 0-9, . 문자가 하나 이상 있어야 합니다.
- 마지막으로 .com과 같은 형식의 도메인이 있어야 합니다.
- $로 종료합니다.
*/
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

interface LoginFormProps {
  loginError: LoginUserErrors | null;
  loginStatus: LoginStatus;
  onLoginSubmit: (data: { email: string; password: string }) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { loginError, loginStatus, onLoginSubmit } = props;
  const { register, handleSubmit, formState } = useForm<{
    email: string;
    password: string;
  }>();
  const { errors } = formState;

  const shouldLoginButtonDisabled = loginStatus === 'loggingIn';
  const buttonText = loginStatus === 'loggingIn' ? 'Signing in...' : 'Sign in';

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <fieldset className="form-group">
        <input
          {...register('email', {
            required: '이메일을 입력해주세요.',
            validate: {
              isValidEmail: value => {
                if (!value) {
                  return true; // 입력 값이 없다면 required 메시지만 표시
                }

                return (
                  EMAIL_REGEX.test(value) || '유효한 이메일 주소가 아닙니다.'
                );
              },
            },
          })}
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
          autoComplete="username"
        />
        {errors.email && (
          <LoginErrorMessage>{errors.email.message}</LoginErrorMessage>
        )}
      </fieldset>
      <fieldset className="form-group">
        <input
          {...register('password', {
            required: '비밀번호를 입력해 주세요.',
            minLength: {
              value: 3,
              message: '비밀번호는 최소 3자 이상이어야 합니다.',
            },
          })}
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        {errors.password && (
          <LoginErrorMessage>{errors.password.message}</LoginErrorMessage>
        )}
      </fieldset>
      <LoginButton disabled={shouldLoginButtonDisabled}>
        {buttonText}
      </LoginButton>
    </form>
  );
};

interface LoginButtonProps {
  disabled: boolean;
  children?: ReactNode;
}
const LoginButton = (props: LoginButtonProps) => {
  const { disabled, children } = props;

  return (
    <StyledLoginButton
      type="submit"
      className={`btn btn-lg pull-xs-right`}
      disabled={disabled}
    >
      {children}
    </StyledLoginButton>
  );
};

export default LoginForm;
