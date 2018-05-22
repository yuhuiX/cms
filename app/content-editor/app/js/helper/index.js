'use strict';

const log = require('./log');
const readdir = require('./readdir');
const readFile = require('./readFile');
const renderFile = require('./renderFile');

const helperModule = {
  log,
  readdir,
  readFile,
  renderFile,
};

module.exports = helperModule;
