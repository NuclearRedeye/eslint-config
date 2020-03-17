module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 120,
        useTabs: false,
        semi: true,
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'always'
      }
    ],
    'prefer-const': ['error'] // https://eslint.org/docs/rules/prefer-const
  }
};
