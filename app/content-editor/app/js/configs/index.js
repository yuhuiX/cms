'use strict';

// get and set args from process.argv
let CMS_CONFIG;
const args = process.argv;
args.forEach((val, index) => {
  if (val === '--CMS_CONFIG' && args[index + 1]) {
    CMS_CONFIG = args[index + 1];
  }
});

const deConfig = require('./DE');

const configKey = CMS_CONFIG || process.env.CMS_CONFIG;
const devEnv = process.env.CMS_TEMPLATE_DEV;

let config;

// init for country
if (configKey === 'DE') {
  config = deConfig;
}

// reset for local testing
if (devEnv) {
  const {countryCode} = config;
  config.landingPageContentDirectory = `./app/contents/${countryCode}`;
  config.outputDirectory = `./temp/${countryCode}`;
}

module.exports = config;
