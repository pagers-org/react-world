'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { ROUTES } from '@/src/constants/route';

import Spinner from '@/src/components/Spinner';
import Popup from '@/src/components/common/Popup';

import useBoolean from '@/src/hooks/useBoolean';

import { useRegisterMutation } from '@/features/auth/hooks';

import * as styles from './page.css';

export interface FieldValues {
  username: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();

  const { register: registerForm, handleSubmit } = useForm<FieldValues>();

  const {
    mutateAsync: register,
    isLoading,
    error,
  } = useRegisterMutation({
    onSuccessCallback() {
      openSuccessPopup();
    },
  });

  const {
    bool: showSuccessPopup,
    setTrue: openSuccessPopup,
    setFalse: closeSuccessPopup,
  } = useBoolean(false);

  const onSubmit = async (fieldValues: FieldValues) => {
    try {
      await register(fieldValues);
    } catch (error) {
      // logging to sentry
    }
  };

  const gotoLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.registerContainer}
      >
        <div className={styles.registerText}>로그인</div>
        <Link className={styles.descriptionText} href={ROUTES.REGISTER}>
          Have an account?
        </Link>
        <div>
          <input
            className={styles.registerInput}
            type="text"
            placeholder="닉네임 입력해주세요."
            autoComplete="off"
            {...registerForm('username')}
          />
          <div className={styles.errorMessage}>
            {error?.username && error.username[0]}
          </div>
        </div>
        <div>
          <input
            className={styles.registerInput}
            type="email"
            placeholder="이메일을 입력해주세요."
            autoComplete="off"
            {...registerForm('email')}
          />
          <div className={styles.errorMessage}>
            {error?.email && error.email[0]}
          </div>
        </div>
        <div>
          <input
            className={styles.registerInput}
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...registerForm('password')}
          />
        </div>

        <div>
          <button
            className={styles.registerButton}
            type="submit"
            disabled={isLoading}
          >
            {isLoading && <Spinner />}
            회원가입
          </button>
        </div>
      </form>
      {showSuccessPopup && (
        <Popup
          title="Register Succeed!!!"
          onClickClosePopup={closeSuccessPopup}
          onClickConfirmPopup={gotoLogin}
        />
      )}
    </>
  );
}
