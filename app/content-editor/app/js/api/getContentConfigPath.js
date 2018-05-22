'use strict';

const {resolve} = require('path');

const configs = require('../configs');

module.exports = (path) => {
  return resolve(
    process.cwd(),
    configs.landingPageContentDirectory, `${path}.js`
  );
};
