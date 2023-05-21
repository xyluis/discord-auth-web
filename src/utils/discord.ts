export const authScopes = ['identify', 'guilds']

export const authURL = `https://discord.com/oauth2/authorize?response_type=code&client_id=${
  process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID
}&scope=${authScopes.join('%20')}&redirect_uri=${encodeURIComponent(
  process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI!,
)}&prompt=consent`

export const inviteURL = (guildId?: string) =>
  guildId
    ? `https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&permissions=0&scope=applications.commands%20bot&guild_id=${guildId}`
    : `https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&permissions=0&scope=applications.commands%20bot`
