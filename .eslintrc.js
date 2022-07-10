module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:typescript-enum/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
    },
  ],
  plugins: ['react', '@typescript-eslint', 'typescript-enum', 'prettier'],
  rules: {
    'import/extensions': 0,
    'no-console': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': 0,
    'react/no-danger': 0,
    'default-param-last': 0,
    'no-use-before-define': 0,
    'no-new': 0,
    'no-shadow': 0,
    'no-unused-vars': 0,
    'typescript-enum/no-enum': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
