export const config = { matcher: ['/north-invent/:path*'] }

export default function middleware(request) {
  const url = new URL(request.url)
  const path = url.pathname

  // Always allow the login page and login API through
  if (path === '/north-invent/login' || path.startsWith('/api/login')) {
    return
  }

  const cookie = request.headers.get('cookie') || ''
  const niAuth = cookie.split(';').find(c => c.trim().startsWith('ni_auth='))

  // The cookie is only ever set by api/login.js after verifying NI_PASSWORD
  // server-side, so its presence is sufficient to grant access.
  if (!niAuth) {
    return Response.redirect(new URL('/north-invent/login', request.url), 302)
  }
}
