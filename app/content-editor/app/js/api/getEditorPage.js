'use strict';

const path = require('path');

const {
  renderFile,
} = require('../helper');
const getContentConfig = require('./getContentConfig');
const getSchema = require('./getSchema');


module.exports = (pagePath) => {
  const contentConfig = getContentConfig(pagePath);
  const templatePath = path.resolve(__dirname, '../../editor.html');

  let schema;
  let startval;
  if (contentConfig) {
    const templateFile = contentConfig.data._templateFile;
    startval = JSON.stringify(contentConfig.data);

    if (templateFile) {
      const index = templateFile.lastIndexOf('.');
      const schemaName = templateFile.substr(0, index);
      schema = JSON.stringify(getSchema(schemaName));
    }
  }

  return renderFile(templatePath, {schema, startval})
    .catch((errorMessage) => {
      return Promise.reject({
        errorTitle: `Some error occurs when rendering editor page`,
        errorMessage,
      });
    })
  ;
};
