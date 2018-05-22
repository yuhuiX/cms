'use strict';

const defaultMetaRobots = 'index,follow';

module.exports = {
  type: 'string',
  description: 'meta robots of the page',
  enum: [
    defaultMetaRobots,
    'index,nofollow',
    'noindex,follow',
    'noindex,nofollow',
  ],
  default: defaultMetaRobots,
};
