import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {BuildOptions} from '../types';

export const buildHtmlPlugin = (params: BuildOptions) => {
  const {paths} = params;

  return new HtmlWebpackPlugin({
    template: paths.html,
  });
};
