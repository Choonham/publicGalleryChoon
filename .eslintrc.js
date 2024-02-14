module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    eqeqeq: ['error', 'always'],
    'no-console': 'warn',
    indent: ['error', 2],
    'no-trailing-spaces': ['error', {skipBlankLines: true}],
    'max-len': ['error', {code: 101}],
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
  },
};
