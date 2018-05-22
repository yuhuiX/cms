'use strict';

const getContentConfigPath = require('./getContentConfigPath');

module.exports = (path) => {
  const contentConfigPath = getContentConfigPath(path);
  delete require.cache[contentConfigPath];

  return require(contentConfigPath);
};
