import { useEffect } from 'react';
import type { FieldErrors } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onLogin: (data: { email: string; password: string }) => void;
  onError: (errors: FieldErrors) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { onLogin, onError } = props;
  const { register, handleSubmit, formState } = useForm<{
    email: string;
    password: string;
  }>();
  const { errors } = formState;

  useEffect(
    () => {
      if (Object.keys(errors).length > 0) {
        onError(errors);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors], // onError 를 제외하기 위함
  );

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <fieldset className="form-group">
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: '유효한 이메일 주소가 아닙니다.',
            },
          })}
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          {...register('password')}
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
        />
      </fieldset>
      <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
