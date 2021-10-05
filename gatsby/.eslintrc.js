const OFF = 0
const ERROR = 2

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'react-app',
    'plugin:json/recommended',
    'standard'
  ],
  plugins: ['react'],
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    indent: [ERROR, 2, { SwitchCase: 1 }],
    'space-before-function-paren': [ERROR, 'always'],
    'linebreak-style': [ERROR, 'unix'],
    curly: [ERROR, 'all'],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'no-console': OFF,
    quotes: [ERROR, 'single', { allowTemplateLiterals: true }],
    semi: [ERROR, 'never'],
    'arrow-parens': [ERROR, 'as-needed'],
    'require-await': ERROR,
    'capitalized-comments': [
      'error',
      'always',
      { ignoreConsecutiveComments: true }
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'arrow-body-style': [ERROR, 'as-needed'],
    'no-implicit-coercion': ERROR,

    'react/prop-types': [OFF],
    'react/jsx-pascal-case': [OFF]
  }
}
