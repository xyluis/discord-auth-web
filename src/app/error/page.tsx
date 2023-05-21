import Link from 'next/link'

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center gap-2">
      <h1>Oooops! Aconteceu um erro!</h1>

      <Link href="/" className="text-blue-500 hover:text-blue-400">
        Me tire daqui
      </Link>
    </main>
  )
}
