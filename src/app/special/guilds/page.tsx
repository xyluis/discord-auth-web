import Link from 'next/link'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import { getUser } from '@/lib/auth'
import { z } from 'zod'
import Image from 'next/image'

async function getGuilds() {
  const token = cookies().get('token')?.value
  const { accessToken } = getUser()

  const guildsResponse = await api.get('/api/guilds/@me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      access_token: accessToken,
    },
  })

  const guildsSchema = z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      icon: z.string().nullable(),
      owner: z.boolean(),
      permissions: z.coerce.number(),
      iconUrl: z.string().nullable(),
    }),
  )

  const guilds = guildsSchema.parse(guildsResponse.data.guilds)

  return guilds
}

export default async function GuildsPage() {
  const guilds = await getGuilds()

  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center gap-4">
      <h1>Guilds</h1>

      <Link href="/" className="text-blue-500 hover:text-blue-400">
        Go back to home
      </Link>

      <div className="grid grid-cols-3 gap-4">
        {guilds.map((guild) => (
          <div
            key={guild.id}
            className="static flex w-auto flex-col items-center justify-center gap-1 rounded-xl border bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          >
            {guild.iconUrl && (
              <Image
                src={guild.iconUrl}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <h2>{guild.name}</h2>
          </div>
        ))}
      </div>

      <Link href="/" className="text-blue-500 hover:text-blue-400">
        Go back to home
      </Link>
    </main>
  )
}
