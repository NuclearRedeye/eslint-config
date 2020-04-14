const prettier = require('./prettier.js');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    // Import commom prettier rules
    'prettier/prettier': prettier.rules,

    // ESLint Rules
    'prefer-const': ['error'], // https://eslint.org/docs/rules/prefer-const
    'no-unused-vars': ['error'] //https://eslint.org/docs/rules/no-unused-vars
  }
};
