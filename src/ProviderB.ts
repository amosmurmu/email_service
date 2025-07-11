export async function sendWithProviderB(
  to: string,
  subject: string,
  body: string
) {
  console.log(`ProviderB: Sending to ${to}`)
  if (Math.random() < 0.5) throw new Error('Provider B failed')
  return { success: true }
}
