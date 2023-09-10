import path from 'path';
import { buildConfig } from './config/buildConfig';
import type { Configuration } from 'webpack';
import type { BuildEnv, BuildPaths } from './config/types';

const config = (env: BuildEnv): Configuration => {
  const { mode = 'development' } = env;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const isDev = mode === 'development';

  return buildConfig({ mode, paths, isDev });
};

export default config;
