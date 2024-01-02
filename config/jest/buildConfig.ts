import path from 'path';
import type {Config} from 'jest';

export const buildConfig = (): Config => {
  return {
    rootDir: path.resolve(__dirname, '..', '..'),
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    modulePaths: ['<rootDir>src'],
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
      '\\.svg$': '<rootDir>config/jest/mocks/SvgMock.tsx',
    },
    globals: {
      __IS_DEV__: true,
    },
  };
};
