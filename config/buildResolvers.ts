import type { ResolveOptions } from 'webpack';

export const buildResolvers = (): ResolveOptions => {
  const extensions = ['.tsx', '.ts', '.js'];

  return {
    extensions,
  };
};
