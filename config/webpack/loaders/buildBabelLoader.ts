export const buildBabelLoader = () => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
});
