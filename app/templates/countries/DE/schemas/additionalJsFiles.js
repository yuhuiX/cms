'use strict';

module.exports = {
  type: 'array',
  description: 'to be included additional js file(s)',
  options: {
    collapsed: true,
  },
  items: {
    type: 'string',
    title: 'additional js file',
    description: 'path to js file. e.g. "/src/js/additional.min.js"',
  },
};
