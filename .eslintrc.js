module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended', 'prettier'],
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
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': 0,
    'no-console': 1,
    'no-undef': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-has-content': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'no-new': 0,
  },
};
