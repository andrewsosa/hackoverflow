module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  plugins: ['jest', 'react'],
  rules: {
    'no-console': 'off',
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  rules: {
    'react/prop-types': 'off',
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       paths: ['node_modules/'],
  //     },
  //   },
  // },
};
