export const isWindows = (): boolean =>
  /^win(64|32)$/i.test(window.navigator.platform);
