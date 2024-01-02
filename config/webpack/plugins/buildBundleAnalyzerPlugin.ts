import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import type {BuildOptions} from '../types';

interface Params extends Pick<BuildOptions, 'host' | 'bundleAnalyzerPort'> {}

export const buildBundleAnalyzerPlugin = (params: Params) => {
  const {host, bundleAnalyzerPort} = params;

  return new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerHost: host,
    analyzerPort: bundleAnalyzerPort,
  });
};
