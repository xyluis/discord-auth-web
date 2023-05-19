import Link from 'next/link'

export default function SpecialPage() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center gap-2">
      <h1>Ok, you are logged!</h1>

      <Link href="/" className="text-blue-500 hover:text-blue-400">
        Go back to home
      </Link>
    </main>
  )
}
