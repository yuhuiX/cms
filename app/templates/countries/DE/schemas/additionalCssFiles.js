'use strict';

module.exports = {
  type: 'array',
  description: 'to be included additional css file(s)',
  options: {
    collapsed: true,
  },
  items: {
    type: 'string',
    title: 'additional css file',
    description: 'path to css file. e.g. "/src/css/additional.min.css"',
  },
};
