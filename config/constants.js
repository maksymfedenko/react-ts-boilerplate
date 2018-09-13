const path = require('path');

module.exports = {
  PATHS: {
    src: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../build'),
    public: path.join(__dirname, '../public'),
    devPublic: path.join(__dirname, '../src/assets'),
  },
  API: {
    dev: 'http://example.com/api',
    prod: 'http://example.com/api',
  },
};
