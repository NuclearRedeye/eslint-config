# Coding Standards

A library that provides a eslint configurations for my prefered style and linting rules for JavaScript and TypeScript.

## Usage

Install the library, and it's peer dependencies...

```
npm install --save-dev eslint prettier @nuclearredeye/eslint-config
```

Then create a top level .eslintrc file, and insert the following for JavaScript...

```
{
  "extends": "@nuclearredeye/eslint-config/src/javascript.js"
}
```

Or the following for TypeScript...

```
{
  "extends": "@nuclearredeye/eslint-config/src/typescript.js"
}
```

Then run the linter...

```
npx eslint ./src --ext .js,.ts
```

Or add as a target to your package.json

```
"lint": "eslint ./src --ext .js,.ts"
```
