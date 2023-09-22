import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

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
  onLoginSubmit: (data: { email: string; password: string }) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { onLoginSubmit } = props;
  const { register, handleSubmit, formState } = useForm<{
    email: string;
    password: string;
  }>();
  const { errors } = formState;

  const onSubmit = (data: { email: string; password: string }) => {
    console.log('onSubmit: ' + JSON.stringify(data, null, 2));
    onLoginSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
        Sign in
      </button>
    </form>
  );
};

const LoginErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
  margin-left: 5px;
  font-size: 14px;
`;

export default LoginForm;
