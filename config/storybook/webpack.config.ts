import {merge} from 'webpack-merge';
import {buildCopyPlugin} from '../webpack/plugins/buildCopyPlugin';
import {buildFontsLoader} from '../webpack/loaders/buildFontsLoader';
import {buildResolvers} from '../webpack/buildResolvers';
import {buildBabelLoader} from '../webpack/loaders/buildBabelLoader';
import {buildCssLoader} from '../webpack/loaders/buildCssLoader';
import {buildSvgLoader} from '../webpack/loaders/buildSvgLoader';
import {buildCssPlugin} from '../webpack/plugins/buildCssPlugin';
import {buildDefinePlugin} from '../webpack/plugins/buildDefinePlugin';
import type {Configuration, ModuleOptions} from 'webpack';

interface Params {
  config: Configuration;
}

const resetDefaultLoaders = (rules: Exclude<ModuleOptions['rules'], undefined>, names: Array<string>) =>
  rules.filter((rule) => {
    if (!rule || typeof rule === 'string' || !rule.test) {
      return true;
    }

    if (names.some((name) => rule.test?.toString().includes(name))) {
      return false;
    }

    return true;
  });

export default (params: Params): Configuration => {
  const {config} = params;
  const options = {isDev: false};

  const loaders = [buildBabelLoader(), buildCssLoader(options), buildSvgLoader(), buildFontsLoader(options)];
  const plugins = [buildCssPlugin(options), buildDefinePlugin(options), buildCopyPlugin()];

  const customConfig: Partial<Configuration> = {
    module: {
      rules: loaders,
    },
    plugins,
    resolve: {
      alias: buildResolvers().alias,
    },
  };

  if (config.module?.rules) {
    config.module.rules = resetDefaultLoaders(config.module.rules, ['svg', 'css']);
  }

  return merge(config, customConfig);
};
