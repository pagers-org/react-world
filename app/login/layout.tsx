import { ReactNode } from 'react';
import { cookies } from 'next/headers';

interface Props {
  children: ReactNode;
}

export default function LoginLayout({ children }: Props) {
  const cookieStore = cookies();

  const accessToken = cookieStore.get('access_token')?.value;

  return <>{children}</>;
}
