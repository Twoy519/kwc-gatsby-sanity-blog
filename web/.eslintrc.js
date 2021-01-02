module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/prop-types': 0,
    'comma-dangle': false,
    'space-in-brackets': ['error', 'always'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4',
    },
  },
};
