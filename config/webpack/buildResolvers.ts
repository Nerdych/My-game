import path from 'path';
import type {ResolveOptions} from 'webpack';

export const buildResolvers = (): ResolveOptions => {
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  const basePath = path.resolve(__dirname, '..', '..', 'src');

  return {
    extensions,
    alias: {
      '@app': path.resolve(basePath, 'app'),
      '@pages': path.resolve(basePath, 'pages'),
      '@widgets': path.resolve(basePath, 'widgets'),
      '@features': path.resolve(basePath, 'features'),
      '@entities': path.resolve(basePath, 'entities'),
      '@shared': path.resolve(basePath, 'shared'),
    },
  };
};
