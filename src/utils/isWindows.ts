export function isWindows(): boolean {
  return /^win(64|32)$/i.test(window.navigator.platform);
}
