const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  console.log('Loading local config');
  require('dotenv').config();
}

module.exports = {
  env,
};
