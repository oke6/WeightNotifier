module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    'no-multiple-empty-lines': [ 2, { max: 1 } ],
    quotes: [ 2, 'single' ],
    '@typescript-eslint/no-explicit-any': [ 'off' ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-useless-escape': 'off',
    'no-empty-pattern': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    semi: [ 'error', 'always' ],
    //'semi-spacing': ['error', { after: true, before: false }],
    //'semi-style': [ 'error', 'first' ],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'comma-dangle': [ 'error', 'never' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ]
  },
  overrides: [
    {
      files: [ '*.js', '*.ts' ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    }
  ]
};
