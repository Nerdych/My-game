import TerserPlugin from 'terser-webpack-plugin';

export const buildTerserPlugin = () => {
  return new TerserPlugin({
    extractComments: false,
  });
};
