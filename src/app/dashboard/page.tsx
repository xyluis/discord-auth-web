import Link from 'next/link'
import { apiURL } from '@/lib/api'
import { cookies } from 'next/headers'
import { z } from 'zod'
import Image from 'next/image'
import { inviteURL } from '@/utils/discord'

async function getGuilds() {
  const token = cookies().get('token')?.value

  const guildsResponse = await fetch(`${apiURL}/api/guilds/@me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'force-cache',
  })

  const guildsResponseData = await guildsResponse.json()

  const guildsSchema = z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      icon: z.string().nullable(),
      canManage: z.boolean(),
      permissions: z.number(),
      iconUrl: z.string().nullable(),
    }),
  )

  const guilds = guildsSchema.parse(guildsResponseData.guilds)

  return guilds
}

export default async function DashboardPage() {
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
            className="static flex w-auto flex-col items-center justify-center gap-1 rounded-xl border lg:p-4"
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
            {guild.canManage ? (
              <Link
                href={`/dashboard/${guild.id}`}
                className="text-blue-500 hover:text-blue-400"
              >
                Manage
              </Link>
            ) : (
              <Link
                href={inviteURL(guild.id)}
                className="text-blue-500 hover:text-blue-400"
              >
                Add
              </Link>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
