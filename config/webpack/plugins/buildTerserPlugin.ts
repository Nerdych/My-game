import TerserPlugin from 'terser-webpack-plugin';

export const buildTerserPlugin = () =>
  new TerserPlugin({
    extractComments: false,
  });
