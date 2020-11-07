module.exports = {
  extends: 'piecioshka',

  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    // browser: true,
    node: true,
    commonjs: true,
    es6: true,
    // amd: true,
    // mocha: true,
    // jasmine: true,
    jest: true,
    // jquery: true,
  },

  // http://eslint.org/docs/rules/
  rules: {
    'max-statements': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-magic-numbers': 'off',
    indent: ['error', 2],
    'require-jsdoc': 'off',
    'default-case': 'off',
    'object-curly-newline': 'off',
    'no-console': 'off',

    'smells/no-switch': 'off',
    'smells/no-complex-switch-case': 'error',
    'smells/no-setinterval': 'off',
    'smells/no-this-assign': 'error',
  },

  // List of global variables.
  globals: {},

  parserOptions: {
    // Support syntax ES2018
    ecmaVersion: 2018,

    // Support syntax ES2015 Import/Export
    sourceType: 'module',
  },

  plugins: ['smells'],
};
