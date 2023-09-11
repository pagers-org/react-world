'use server';
import { http } from '@/libs/http';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// 회원가입
const createAccount = async (formData: FormData) => {
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  const res = await fetch(`${process.env.API_URL}/users`, {
    method: 'POST',
    body: JSON.stringify({ user: { username, email, password } }),
  });

  // await http.post('https://api.realworld.io/api/users', { user: { username, email, password } });

  revalidatePath('/api/users');
  redirect('/login');
};

const login = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');
  const res = await http.post(`${process.env.API_URL}/users/login`, { user: { email, password } });
  console.log(res);
  cookies().set({
    name: 'token',
    value: 'ddd',
    httpOnly: true,
    path: '/',
    secure: true,
  });
};

const createCookies = (name: string, value: string) => {
  cookies().set({
    name,
    value,
    httpOnly: true,
    path: '/',
    secure: true,
  });
};

export { createAccount, createCookies, login };
