export function isInDevelopment() {
  if (process.env.NODE_ENV === "development") {
    return true
  }
  return false
}
