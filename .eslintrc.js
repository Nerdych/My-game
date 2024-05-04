module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint', 'react'],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  globals: {
    React: true,
    __IS_DEV__: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    curly: ['error', 'all'],

    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],

    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {consistent: true},
        ObjectPattern: {consistent: true},
        ImportDeclaration: 'never',
        ExportDeclaration: 'never',
      },
    ],

    'react/jsx-filename-extension': [2, {extensions: ['.jsx', '.tsx']}],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],

    '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: '__.*__'}],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-shadow': 'error',

    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
        depth: 3,
      },
    ],
  },

  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx', 'config/**/*.ts'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    {
      files: ['src/**/*.d.ts'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
};
