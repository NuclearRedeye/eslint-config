const prettier = require('./prettier.js');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    // Import commom prettier rules
    'prettier/prettier': prettier.rules,

    // Typescript Rules
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-inferrable-types': 'off'
  }
};
