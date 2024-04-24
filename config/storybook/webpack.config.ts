import {merge} from 'webpack-merge';
import {buildBabelLoader} from '../webpack/loaders/buildBabelLoader';
import {buildCssLoader} from '../webpack/loaders/buildCssLoader';
import {buildSvgLoader} from '../webpack/loaders/buildSvgLoader';
import {buildCssPlugin} from '../webpack/plugins/buildCssPlugin';
import {buildDefinePlugin} from '../webpack/plugins/buildDefinePlugin';
import {buildProgressPlugin} from '../webpack/plugins/buildProgressPlugin';
import type {Configuration, ModuleOptions} from 'webpack';

interface Params {
  config: Configuration;
}

const resetDefaultSvgLoaders = (rules: Exclude<ModuleOptions['rules'], undefined>) => {
  return rules.map((rule) => {
    if (!rule || typeof rule === 'string' || !rule.test) {
      return rule;
    }

    if (rule.test.toString().includes('svg')) {
      return {...rule, exclude: rule.test};
    }

    return rule;
  });
};

export default (params: Params): Configuration => {
  const {config} = params;
  const options = {isDev: true};

  const loaders = [buildBabelLoader(), buildSvgLoader(), buildCssLoader(options)];
  const plugins = [buildProgressPlugin(), buildDefinePlugin(options), buildCssPlugin(options)];

  const customConfig: Partial<Configuration> = {
    module: {
      rules: loaders,
    },
    plugins,
  };

  if (config.module?.rules) {
    config.module.rules = resetDefaultSvgLoaders(config.module?.rules);
  }

  return merge(config, customConfig);
};
