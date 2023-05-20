import { NextRequest, NextResponse } from 'next/server'
import decode from 'jwt-decode'
import { api } from '@/lib/api'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value

  const response = await api.post('/auth/discord', {
    code,
  })

  const { token } = response.data

  const redirectURL = redirectTo ?? new URL('/', request.url)

  const { exp } = decode(token) as { exp: number }

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${exp};`,
    },
  })
}
