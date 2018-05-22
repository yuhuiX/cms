'use strict';

const path = require('path');
const {exec} = require('child_process');

// get and set args from process.argv
let CMS_CONFIG;
const args = process.argv;
args.forEach((val, index) => {
  if (val === '--CMS_CONFIG' && args[index + 1]) {
    CMS_CONFIG = args[index + 1];
  }
});

const configKey = CMS_CONFIG || process.env.CMS_CONFIG;

const source = path.resolve(__dirname, `../../dist/${configKey}`);

exec(`cp -Rf ${source} ./static/`);
