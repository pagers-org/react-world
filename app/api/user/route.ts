import { NextRequest, NextResponse } from 'next/server';
import { getUserAPI, updateUserAPI } from '@/services/users';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value || '';

  const { user } = await getUserAPI(token);

  return NextResponse.json({
    message: 'Login successfull',
    success: true,
    user,
  });
}

export async function PUT(req: NextRequest) {
  const token = req.cookies.get('token')?.value || '';
  const user = await req.json();

  return updateUserAPI(user, token);
}
