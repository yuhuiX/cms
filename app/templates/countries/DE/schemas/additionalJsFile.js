'use strict';

module.exports = {
  type: 'array',
  description: 'to be included additional js file(s)',
  options: {
    collapsed: true,
  },
  items: {
    type: 'object',
    title: 'js file item',
    properties: {
      JsFile: {
        type: 'string',
        description: 'path of javascript to include. e.g. "/src/js/additional.min.js"',
      },
    },
  },
};
