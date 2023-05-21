import Link from 'next/link'

interface GuildPageProps {
  params: {
    id: string
  }
}

export default async function GuildPage({ params }: GuildPageProps) {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center gap-2">
      <h1>You are in dashboard page of guild: {params.id}</h1>

      <Link href="" className="text-blue-500 hover:text-blue-400">
        Go back to home
      </Link>
    </main>
  )
}
