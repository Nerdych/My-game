type UnknownArray = Array<unknown>;
type UnknownObject = Record<string, unknown>;

export const guards = {
  defined: <T>(value: T | undefined): value is T => value !== undefined,
  object: <T extends UnknownObject>(value: unknown): value is T =>
    typeof value === 'object' && value !== null && !Array.isArray(value),
  array: <T extends UnknownArray>(value: unknown): value is T => Array.isArray(value),
  not: {
    defined: <T>(value: T | undefined): value is undefined => !guards.defined(value),
  },
};
