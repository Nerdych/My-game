module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    curly: ['error', 'all'],
    'linebreak-style': ['error', 'windows'],
    'arrow-body-style': ['error', 'always'],

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
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'index', 'unknown', 'type'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],

    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  globals: {
    __IS_DEV__: true,
    React: true,
  },
};
