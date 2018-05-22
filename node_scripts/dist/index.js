'use strict';

const {exec} = require('child_process');

const countries = ['DE'];

/**
 * @description return built CSS directory of given country
 * @param {string} countryCode
 * @return {string}
 */
function getBuiltCssDirectory(countryCode) {
  return `./dist/${countryCode}/src/css`;
}

let commands = [];
countries.forEach((countryCode) => {
  const outputDirectory = getBuiltCssDirectory(countryCode);
  commands = commands.concat([
    `mkdir -p ${outputDirectory}`,
    `cp -Rf ./app/templates/countries/${countryCode}/css/ ${outputDirectory}`,
  ]);
});

exec(commands.join(' && '));
