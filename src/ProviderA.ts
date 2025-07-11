export async function sendWithProviderA(
  to: string,
  subject: string,
  body: string
) {
  console.log(`ProviderA: Sending to ${to}`)
  if (Math.random() < 0.7) throw new Error('Provider A failed')
  return { success: true }
}
