export const replaceNameIfNeeded = (filename: string, isDev: boolean) => {
  if (isDev) {
    return filename;
  }

  return filename.replace(/\[name\]\.?/, '');
};
