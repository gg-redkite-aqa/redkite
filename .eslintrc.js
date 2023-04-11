module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  globals: {
    page: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    // v.1.6 (2022-03-14)
    '@typescript-eslint/no-explicit-any': 0,
    'arrow-parens': [1, 'as-needed'],
    'brace-style': [1, 'stroustrup', { allowSingleLine: true }],
    'class-methods-use-this': 0,
    'func-names': [1, 'always', { generators: 'never' }],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-console': [1, { allow: ['error', 'info', 'warning'] }],
    'no-param-reassign': [1, { props: false }],
    'no-plusplus': [1, { allowForLoopAfterthoughts: true }],
    'no-return-assign': 0,
    'linebreak-style': 0,
    'object-curly-newline': [
      0,
      {
        ObjectExpression: 'always',
        ObjectPattern: { minProperties: 2 },
      },
    ],
    radix: [1, 'as-needed'],

    // unique for this project only
    'max-len': [1, { code: 250 }],
    'no-restricted-syntax': 0,
    'no-empty-pattern': 0,
  },
};
