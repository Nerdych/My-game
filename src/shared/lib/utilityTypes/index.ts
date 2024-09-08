type Undefinable<T> = T | undefined;
type StringKeys<T> = Extract<keyof T, string>;

export type {Undefinable, StringKeys};
