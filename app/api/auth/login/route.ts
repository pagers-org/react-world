import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { API_BASE_URL } from '@/src/services/HttpClient';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const cookieStore = cookies();

  const res = await fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email,
        password,
      },
    }),
  });

  const data = await res.json();

  cookieStore.set({
    name: 'access_token',
    value: data.user.token,
    httpOnly: true,
    secure: true,
  });

  return NextResponse.json(data);
}
