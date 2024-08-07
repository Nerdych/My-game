module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:i18next/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'i18next', 'react-hooks', 'jsx-a11y'],
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
    'no-console': ['error', {allow: ['error']}],
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-useless-constructor': 'off',

    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {consistent: true},
        ObjectPattern: {consistent: true},
        ImportDeclaration: 'never',
        ExportDeclaration: {multiline: true, minProperties: 3},
      },
    ],

    'lines-between-class-members': [
      'error',
      {
        enforce: [
          {blankLine: 'always', prev: '*', next: 'method'},
          {blankLine: 'always', prev: 'method', next: '*'},
          {blankLine: 'never', prev: 'field', next: 'field'},
        ],
      },
    ],

    'react/jsx-filename-extension': [2, {extensions: ['.jsx', '.tsx']}],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

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

    'i18next/no-literal-string': [
      'error',
      {
        mode: 'jsx-text-only',
      },
    ],

    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
        depth: 3,
      },
    ],

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },

  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx', 'config/**/*.ts', 'config/**/*.tsx'],
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
    {
      files: ['src/**/*.stories.*'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
