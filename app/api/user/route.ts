import { NextRequest, NextResponse } from 'next/server';
import { getUserAPI, updateUserAPI } from '@/services/users';

export async function GET(req: NextRequest) {
  const { value } = req.cookies.get('token');

  const { user } = await getUserAPI(value);

  return NextResponse.json({
    message: 'Login successfull',
    success: true,
    user,
  });
}

export async function PUT(req: NextRequest) {
  const { value } = req.cookies.get('token');
  const user = await req.json();
  console.log('Route');
  console.log(user);

  return updateUserAPI(user, value);
}
