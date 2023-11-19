import type {Configuration as WebpackConfiguration} from 'webpack';
import type {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import type {WebpackRunOptions} from 'webpack-cli/lib/types';
import type {Port, Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';

type BundleAnalyzerPort = BundleAnalyzerPlugin.Options['analyzerPort'];

export interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export type BuildMode = WebpackConfiguration['mode'];
export type WebpackEnv = WebpackRunOptions['env'];

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv extends WebpackEnv {
  mode: BuildMode;
  host: string;
  port: Port;
  bundleAnalyzerPort: BundleAnalyzerPort;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  host: string;
  port: Port;
  bundleAnalyzerPort: BundleAnalyzerPort;
  isDev: boolean;
}
