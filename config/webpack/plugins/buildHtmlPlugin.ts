import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {BuildOptions} from '../types';

type Params = Pick<BuildOptions, 'paths'>;

export const buildHtmlPlugin = (params: Params) => {
  const {paths} = params;

  return new HtmlWebpackPlugin({
    template: paths.html,
  });
};
