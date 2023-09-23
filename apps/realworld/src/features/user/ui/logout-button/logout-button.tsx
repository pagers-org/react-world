'use client';
import { getGetUserQueryKey } from '@/entities/user/api/useGetUser';
import { PathBuilder } from '@/shared/utils/routes';
import webStorage, { StorageKey } from '@/shared/utils/webStorage';
import { Button, ButtonProps } from '@packages/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface LogoutButtonProps extends Partial<ButtonProps> {
  children: ReactNode;
}

const LogoutButton = ({
  children,
  onClick,
  color = 'error',
  size = 'm',
  variant = 'outlined',
  ...rest
}: LogoutButtonProps) => {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const logout = async () => {
    webStorage.removeItem(StorageKey.userToken);
    await queryClient.invalidateQueries(getGetUserQueryKey());
  };
  const movePath = () => {
    const homePath = PathBuilder.buildHome().getPath();
    push(homePath);
  };

  return (
    <Button
      {...rest}
      variant={variant}
      color={color}
      size={size}
      onClick={async e => {
        await logout();
        movePath();
        onClick?.(e);
      }}
    >
      {children}
    </Button>
  );
};

export default LogoutButton;
