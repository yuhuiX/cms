'use strict';

module.exports = {
  type: 'object',
  description: 'stage configurations',
  properties: {
    StageImageLarge: {
      type: 'string',
      description: 'path of image used for stage for width > 1200px. e.g. "/src/img/topic-lg.jpg"',
    },
    StageImageMedium: {
      type: 'string',
      description: 'path of image used for stage for 1199px >= width > 768px. e.g. "/src/img/topic-sm.jpg"',
    },
    StageImageSmall: {
      type: 'string',
      description: 'path of image used for stage for width <= 767px. e.g. "/src/img/topic-xs.jpg"',
    },
    TopicText: {
      type: 'string',
      description: 'text in h1',
    },
    StageText: {
      type: 'string',
      format: 'textarea',
      description: 'customized stage text',
    },
    StageTextShadowColor: {
      type: 'string',
      format: 'color',
      description: 'shadow color for stage text',
    },
  },
};
