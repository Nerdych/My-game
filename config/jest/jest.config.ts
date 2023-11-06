import path from 'path';

import type {Config} from 'jest';

const config: Config = {
  rootDir: path.resolve(__dirname, '..', '..'),
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  globals: {
    __IS_DEV__: true,
  },
  modulePaths: ['<rootDir>src'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    // TODO: подумать о замене на библу
    '\\.svg$': '<rootDir>config/jest/mocks/SvgMock.tsx',
  },
};

export default config;
