'use strict';

const path = require('path');

module.exports = {
  countryCode: 'DE',
  landingPageContentDirectory: './app/landing-pages/contents',
  outputDirectory: './dist',
  templateDirectory: path.resolve(
    __dirname,
    '../../../../templates/countries/DE'
  ),
};
