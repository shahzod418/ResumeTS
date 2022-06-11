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
      files: ['*.jsx', '*.js'],
    },
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  plugins: ['react', 'svelte3', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 1,
    'no-undef': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'react/prop-types': 0,
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
  settings: {
    'svelte3/typescript': true,
  },
};
