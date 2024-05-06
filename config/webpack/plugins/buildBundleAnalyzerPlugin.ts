import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import type {BuildOptions} from '../types';

type Params = Pick<BuildOptions, 'host' | 'bundleAnalyzerPort'>;

export const buildBundleAnalyzerPlugin = (params: Params) => {
  const {host, bundleAnalyzerPort} = params;

  return new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerHost: host,
    analyzerPort: bundleAnalyzerPort,
  });
};
