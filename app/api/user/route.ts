import { NextRequest, NextResponse } from 'next/server';
import { getUserAPI, updateUserAPI } from '@/services/users';

export async function GET(req: NextRequest) {
  const { value } = req.cookies.get('token');
  console.log(value);
  console.log('route user get');
  const { user } = await getUserAPI(value);
  console.log(user);

  return NextResponse.json({
    message: 'Login successfull',
    success: true,
    user,
  });
}

export async function PUT(req: NextRequest) {
  const { value } = req.cookies.get('token');
  const user = await req.json();
  console.log(user);
  console.log('route user put');
  return updateUserAPI(user, value);
}
