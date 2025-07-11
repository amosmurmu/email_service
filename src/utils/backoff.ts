export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 500
): Promise<T> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      if (attempt == maxRetries) throw error
      const delay = baseDelay * Math.pow(2, attempt)
      await new Promise((res) => setTimeout(res, delay))
    }
  }
  throw new Error('Max retries exceeded')
}
