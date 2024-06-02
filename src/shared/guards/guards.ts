export const guards = {
  defined: <T>(value: T | undefined): value is T => value !== undefined,
};
