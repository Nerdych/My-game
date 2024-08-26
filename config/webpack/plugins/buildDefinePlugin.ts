import {DefinePlugin} from 'webpack';
import dotenv from 'dotenv';
import type {BuildOptions} from '../types';

type Params = Pick<BuildOptions, 'isDev'>;

export const buildDefinePlugin = (params: Params) => {
  const {isDev} = params;
  const env = dotenv.config().parsed ?? {};

  const formatEnv = Object.keys(env).reduce<dotenv.DotenvParseOutput>((acc, envKey) => {
    acc[`__${envKey}__`] = JSON.stringify(env[envKey]);
    return acc;
  }, {});

  return new DefinePlugin({
    __IS_DEV__: isDev,
    ...formatEnv,
  });
};
