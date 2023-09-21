import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onLogin: (data: { email: string; password: string }) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { onLogin } = props;
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <fieldset className="form-group">
        <input
          {...register('email')}
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
