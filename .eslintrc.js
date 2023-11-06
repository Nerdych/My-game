module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier', 'plugin:react/recommended'],
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
    'linebreak-style': ['error', 'windows'],
    'arrow-body-style': ['error', 'always'],
    'max-len': ['error', {ignoreComments: true, code: 120}],

    'no-underscore-dangle': 'off',
    'no-console': 'error',
    'no-unused-vars': ['error', {varsIgnorePattern: '__.*__'}],
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

    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [2, {extensions: ['.jsx', '.tsx']}],
    'react/react-in-jsx-scope': 'off',

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

    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },

  overrides: [
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
};
