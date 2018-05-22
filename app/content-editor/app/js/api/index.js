'use strict';

const getEditorPage = require('./getEditorPage');
const getIndexPage = require('./getIndexPage');
const updateContent = require('./updateContent');

const apiModule = {
  getEditorPage,
  getIndexPage,
  updateContent,
};

module.exports = apiModule;
