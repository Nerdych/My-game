import HtmlWebpackPlugin from 'html-webpack-plugin';

interface Params {
  template: string;
}

export const buildHtmlPlugin = (params: Params) => {
  const {template} = params;

  return new HtmlWebpackPlugin({
    template,
  });
};
