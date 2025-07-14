const requestCounts: Record<string, { count: number; timestamp: number }> = {}
const LIMIT = 5

export function isRateLimited(email: string): boolean {
  const now = Date.now()
  const window = 60 * 1000

  if (!requestCounts[email]) {
    requestCounts[email] = { count: 1, timestamp: now }
    return false
  }

  const record = requestCounts[email]

  if (now - record.timestamp > window) {
    requestCounts[email] = { count: 1, timestamp: now }
  }

  if (record.count >= LIMIT) return true

  requestCounts[email].count++
  return false
}
