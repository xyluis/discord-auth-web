import { UserProfile } from '@/components/UserProfile'
import { authURL } from '@/utils/discord'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center gap-2">
      {isAuthenticated ? (
        <>
          <UserProfile />
          <Link href="/dashboard" className="text-blue-500 hover:text-blue-400">
            Dashboard
          </Link>
        </>
      ) : (
        <Link href={authURL} className="text-blue-500 hover:text-blue-400">
          Login
        </Link>
      )}
    </main>
  )
}
