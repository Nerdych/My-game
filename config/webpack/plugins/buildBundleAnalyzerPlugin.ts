import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import type {BuildOptions} from '../types';

export const buildBundleAnalyzerPlugin = (params: BuildOptions) => {
  const {host, bundleAnalyzerPort} = params;

  return new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerHost: host,
    analyzerPort: bundleAnalyzerPort,
  });
};
