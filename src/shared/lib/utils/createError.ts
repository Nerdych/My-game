export const createError = (context: string, message: string): never => {
  throw new Error(`[${context}]: ${message}`)
}