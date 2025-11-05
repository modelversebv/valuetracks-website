export function BuildNumber() {
  return import.meta.env.VITE_BUILD_SHA || 'local'
}
