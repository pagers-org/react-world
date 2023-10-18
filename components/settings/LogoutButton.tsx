'use client';
import useAuth from '@/hooks/useAuth';
import useUserStore from '@/stores/useUserStore';
import { flex } from '@/styles/common.css';
import { logoutButton } from '@/styles/settings.css';
import { UserAction } from '@/types/store/userStore';

import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();
  const { logout } = useUserStore() as UserAction;
  const signoutSuccess = () => {
    logout();
    router.push('/login');
  };

  const signoutError = (err: Error) => {
    console.error(err.message);
  };

  const { signOut } = useAuth({ signoutSuccess, signoutError });
  return (
    <div className={flex}>
      <button className={logoutButton} onClick={() => signOut()}>
        Or click here to logout.
      </button>
    </div>
  );
};

export default LogoutButton;
