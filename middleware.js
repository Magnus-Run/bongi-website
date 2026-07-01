import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/north-invent/:path*'],
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow the login page and the login API through without auth check
  if (
    pathname === '/north-invent/login' ||
    pathname.startsWith('/api/login')
  ) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get('ni_auth');
  const password = process.env.NI_PASSWORD;

  if (!password) {
    // NI_PASSWORD not set — block access until the env var is configured
    return new NextResponse('Service unavailable: auth not configured.', {
      status: 503,
    });
  }

  if (!cookie || cookie.value !== password) {
    const loginUrl = new URL('/north-invent/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
