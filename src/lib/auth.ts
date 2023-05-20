import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface User {
  sub: string
  username: string
  discriminator: string
  avatarUrl: string
  accessToken: string
  decorationUrl: string | null
}

export function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthorized')
  }

  const user: User = decode(token)

  return user
}
