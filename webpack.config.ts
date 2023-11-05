import path from 'path';
import {buildConfig} from './config/webpack/buildConfig';

import type {Configuration, BuildEnv, BuildPaths} from './config/webpack/types';

const config = (env: BuildEnv): Configuration => {
  const {mode = 'development', host = 'localhost', port = 3000, bundleAnalyzerPort = 4000} = env;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const isDev = mode === 'development';

  return buildConfig({
    mode,
    paths,
    port,
    bundleAnalyzerPort,
    host,
    isDev,
  });
};

export default config;
