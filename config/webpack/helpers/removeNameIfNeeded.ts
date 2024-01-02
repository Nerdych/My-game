interface Params {
  string: string;
  isDev: boolean;
}

export const removeNameIfNeeded = (params: Params) => {
  const {string, isDev} = params;

  if (isDev) {
    return string;
  }

  return string.replace(/\[name\]\.?/, '');
};
