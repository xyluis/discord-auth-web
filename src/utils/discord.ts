export const authURL = `https://discord.com/oauth2/authorize?response_type=code&client_id=${
  process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID
}&scope=identify%20guilds.join&redirect_uri=${encodeURIComponent(
  process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI!,
)}&prompt=consent`
