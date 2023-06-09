import { NextRequest, NextResponse } from 'next/server'
import { apiURL } from '@/lib/api'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const error = searchParams.get('error')
  const errorDescription = searchParams.get('error_description')

  if (error || errorDescription) {
    return NextResponse.redirect(new URL('/error', request.url))
  }

  const redirectTo = request.cookies.get('redirectTo')?.value

  const response = await fetch(`${apiURL}/auth/discord`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  })

  const { token, expiration } = await response.json()

  const redirectURL = redirectTo ?? new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; Max-Age=${expiration};`,
    },
  })
}
