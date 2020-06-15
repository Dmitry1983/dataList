// prettier-ignore

module.exports = {
  root: true,
  extends: 'airbnb',
  plugins: [
    'jsx-a11y',
    'prettier'
  ],
  rules: {
    'no-unused-vars': 1,
    'no-extra-semi': 0,
    'semi': 0,
    'no-inline-styles': 0,
    'no-comma-dangle': 0,
    'no-use-before-define': 0,
    'no-console': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
  },
}
