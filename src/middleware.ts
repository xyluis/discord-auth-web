import { authURL } from '@/utils/discord'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(authURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; Max-Age=10;`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
