export const guards = {
  defined: <T>(value: T | undefined): value is T => value !== undefined,
  not: {
    defined: <T>(value: T | undefined): value is undefined => !guards.defined(value),
  },
};
