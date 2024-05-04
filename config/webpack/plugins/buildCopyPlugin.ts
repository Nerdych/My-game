import CopyPlugin from 'copy-webpack-plugin';

export const buildCopyPlugin = () =>
  new CopyPlugin({
    patterns: [
      {
        from: 'public/locales/**/*.json',
        to: ({absoluteFilename}) => {
          const folder = absoluteFilename?.split('\\').at(-2);
          return `locales/${folder}/[name][ext]`;
        },
      },
    ],
  });
