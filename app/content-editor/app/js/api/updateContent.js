'use strict';

const {exec} = require('child_process');
const Promise = require('bluebird');

const {log} = require('../helper');
const configs = require('../configs');

const getContentConfigPath = require('./getContentConfigPath');
const updateContentConfig = require('./updateContentConfig');

module.exports = ({body, query}) => {
  const {pagePath} = query;
  if (pagePath) {
    updateContentConfig(pagePath, body);
    const command = [
      'npm run ejs-renderer --',
      `-i ${getContentConfigPath(pagePath)}`,
      `-t ${configs.templateDirectory}`,
      `-o ${configs.outputDirectory}`,
    ].join(' ');

    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        log('error');
        log(error);
        log('stdout');
        log(stdout);
        log('stderr');
        log(stderr);
        if (error) {
          reject({
            errorTitle: 'ejs-renderer error',
            errorMessage: `Some error occurs when rendering`,
            error,
            stackTrace: error.stack,
          });
        } else {
          resolve();
        }
      });
    });
  } else {
    return Promise.reject({
      errorTitle: 'Mandatory parameter missing',
      errorMessage: 'parameter "pagePath" is mandatory',
    });
  }
};
