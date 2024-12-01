type Undefinable<T> = T | undefined;
type StringKeys<T> = Extract<keyof T, string>;

type ParametersFunctions<T extends Record<string, Function>> = {
  [Key in keyof T]: T[Key] extends (...args: any[]) => unknown ? Parameters<T[Key]> : never;
};
type FirstParametersFunctions<T extends Record<string, Function>> = {
  [Key in keyof T]: T[Key] extends (...args: any[]) => unknown ? Parameters<T[Key]>[0] : never;
};

export type {Undefinable, StringKeys, ParametersFunctions, FirstParametersFunctions};
