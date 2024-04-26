import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type {BuildOptions} from '../types';

export const buildCssLoader = (params: BuildOptions) => {
  const {isDev} = params;
  const CSS_CLASSNAME = isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]';

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: CSS_CLASSNAME,
          },
        },
      },
      'sass-loader',
    ],
  };

  return cssLoader;
};
