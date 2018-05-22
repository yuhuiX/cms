'use strict';

const path = require('path');

const configs = require('../configs');

module.exports = (name) => {
  return require(path.resolve(
    __dirname,
    `../../../../templates/countries/${configs.countryCode}/${name}.schema.js`)
  );
};
