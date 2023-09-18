import { loginAPI } from '@/services/users';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const req = await loginAPI(body);

    const response = NextResponse.json({
      message: 'Login successfull',
      success: true,
    });

    response.cookies.set('token', req.user.token, {
      httpOnly: true,
      path: '/',
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
