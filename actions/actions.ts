'use server';
import { http } from '@/libs/http';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// 회원가입
const createAccount = async (formData: FormData) => {
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  await http.post('https://api.realworld.io/api/users', { user: { username, email, password } });

  revalidatePath('/api/users');
  redirect('/login');
};

export { createAccount };
