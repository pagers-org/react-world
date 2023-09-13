'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../ui/button';

export const Navbar = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const handleButtonClick = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <div className="flex justify-between items-center py-4">
      <p>Logo</p>
      <p className="text-4xl">Henlog</p>
      <div className="flex">
        <Button variant="ghost" onClick={handleButtonClick}>
          {isLogin ? 'Logout' : 'Sign in'}
        </Button>
      </div>
    </div>
  );
};
