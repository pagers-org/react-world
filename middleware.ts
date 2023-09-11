import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = false;

  if (!token) {
    // 아직 보류
    if (req.nextUrl.pathname.startsWith('/api')) {
      return new NextResponse('Authentiction Error', { status: 401 });
    }
    // 권한 문제
    return NextResponse.redirect('http://localhost:3000/login');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/settings', '/editor'],
};
