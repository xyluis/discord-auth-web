import { authURL } from '@/utils/discord'

export function SignIn() {
  return (
    <a
      href={authURL}
      className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 text-zinc-100 backdrop-blur-2xl hover:text-zinc-50 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
    >
      Login
    </a>
  )
}
