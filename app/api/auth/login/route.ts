import { http } from '@/utils/http';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const req = await http.post('/users/login', { user: body });

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
