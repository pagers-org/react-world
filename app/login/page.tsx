'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import Spinner from '@/src/components/Spinner';
import { ROUTES } from '@/src/constants/route';
import { authAtom, useAuth } from '@/src/providers/AuthProvider';

import { authApiService } from '@/features/auth/services/AuthApiService';

import * as styles from './page.css';
import { useAtom } from 'jotai';

interface FieldValues {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FieldValues>();
  const router = useRouter();
  const [_, setAuth] = useAtom(authAtom);

  const { mutateAsync: login, isLoading } = useMutation({
    mutationFn: (fieldValues: FieldValues) => authApiService.login(fieldValues),
  });

  const onSubmit = async (fieldValues: FieldValues) => {
    try {
      const res = await login(fieldValues);
      setAuth(res.user.token);
      router.push(ROUTES.HOME);
    } catch (error) {
      // sentry logging
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginContainer}>
      <div className={styles.loginText}>로그인</div>
      <Link className={styles.descriptionText} href={ROUTES.REGISTER}>
        아직 계정이 없으신가요?
      </Link>
      <div>
        <input
          className={styles.loginInput}
          type="email"
          placeholder="이메일을 입력해주세요."
          autoFocus
          {...register('email')}
        />
      </div>
      <div>
        <input
          className={styles.loginInput}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register('password')}
        />
      </div>
      <div>
        <button
          className={styles.loginButton}
          type="submit"
          disabled={isLoading}
        >
          {isLoading && <Spinner />}
          로그인
        </button>
      </div>
    </form>
  );
}
