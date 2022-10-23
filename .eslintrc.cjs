/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    'vue/setup-compiler-macros': true,
    node: true,
    es6: true,
  },
  rules: {
    // Globales rules
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
        ObjectExpression: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
      },
    ],
    quotes: ['warn', 'single', { avoidEscape: true }],
    semi: ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-unused-vars': ['warn'],
    'no-useless-catch': 'off',
    // Vue rules
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
      },
    ],
  },
};
