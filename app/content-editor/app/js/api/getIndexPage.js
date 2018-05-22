'use strict';

const {
  readdir,
  renderFile,
} = require('../helper');
const configs = require('../configs');

const path = require('path');
const Promise = require('bluebird');


module.exports = () => {
  const landingPageContentDirectory = configs.landingPageContentDirectory;
  const landingPageContentsPath = path.resolve(
    process.cwd(),
    landingPageContentDirectory
  );
  const templatePath = path.resolve(__dirname, '../../index.html');

  return readdir(landingPageContentsPath, 'utf8')
    .then((files) => {
      files = files.map((fileName) => {
        const pageName = fileName.replace(/\.js$/, '');
        const configPath = landingPageContentDirectory + '/' + fileName;

        return {
          configPath,
          pageName,
        };
      });

      return renderFile(templatePath, {files}).catch((errorMessage) => {
        return Promise.reject({
          errorTitle: `Some error occurs when rendering index page`,
          errorMessage,
        });
      });
    }, (errorMessage) => {
      return Promise.reject({
        errorTitle: 'Some error occurs when reading files '
        + 'in landing page directory',
        errorMessage,
      });
    })
  ;
};
