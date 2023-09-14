import { NextRequest, NextResponse } from 'next/server';
import { http } from '@/libs/http';

async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await http.post(`${process.env.API_URL}/users/login`, body);

  console.log(res);

  const response = NextResponse.redirect('http://localhost:3000/', { status: 302 });
  response.cookies.set('auth', res?.user?.token, {
    httpOnly: true,
    secure: true,
  });
  response.json(res);
  return response;
}

export { POST };
