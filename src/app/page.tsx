import { SignIn } from '@/components/SignIn'
import { UserProfile } from '@/components/UserProfile'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center gap-2">
      {isAuthenticated ? <UserProfile /> : <SignIn />}

      <Link href="/special" className="text-blue-500 hover:text-blue-400">
        Access Special Page
      </Link>
    </main>
  )
}
