import {ProgressPlugin} from 'webpack';

export const buildProgressPlugin = () => {
  return new ProgressPlugin();
};
