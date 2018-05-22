'use strict';

const ejs = require('ejs');
const Promise = require('bluebird');

module.exports = Promise.promisify(ejs.renderFile);
