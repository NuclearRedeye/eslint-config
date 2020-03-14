# Coding Standards

A library that provides an eslint configuration for my prefered style and linting rules.

## Usage

Install the library, and it's peer dependencies.

```
npm install --save-dev eslint prettier @nuclearredeye/eslint-config
```

Then create a top level .eslintrc file, and insert the following...

```
{
  "extends": "@nuclearredeye/eslint-config"
}
```

Then run the linter...

```
npx eslint --ignore-path .gitignore ./src/**/*.js
```
