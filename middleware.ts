import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === '/login' || path === '/register';

  const token = request.cookies.get('token')?.value || '';

  if (path.includes('/api/articles/favorite') && !token) {
    return new NextResponse('Authentication Error', { status: 401 });
  }

  if (isPublic && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublic && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

export const config = {
  matcher: ['/settings', '/editor', '/login', '/register', '/api/user', '/api/articles/favorite/:path*'],
};
