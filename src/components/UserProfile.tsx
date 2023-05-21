import { getUser } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

export function UserProfile() {
  const { tag, avatarUrl, decorationUrl } = getUser()
  return (
    <div className="fixed left-0 top-0 flex w-full flex-col items-center justify-center gap-1 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 text-zinc-100 backdrop-blur-2xl hover:text-zinc-50 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="flex items-center justify-center gap-4">
        <div className="relative h-10 w-10">
          {decorationUrl && (
            <Image
              src={decorationUrl}
              width={50}
              height={50}
              alt=""
              className="absolute left-0 top-0  scale-[1.2]"
            />
          )}
          <Image
            src={avatarUrl}
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="font-bold">{tag}</span>
        </div>
      </div>
      <Link href="/api/auth/logout" className="text-red-400 hover:text-red-300">
        Quero sair
      </Link>
    </div>
  )
}
