/* eslint-disable max-len */
'use strict';

const {setPropertyOrder} = require('../../scripts');

const {
  canonicalLinkPath,
  lastModified,
  metaDescription,
  metaKeywords,
  metaRobots,
  pageTitle,
  templateFile,
} = require('./schemas');

module.exports = {
  title: 'Impress Page Editor',
  type: 'object',
  properties: {
    _templateFile: setPropertyOrder(templateFile, 10),
    PageTitle: setPropertyOrder(pageTitle, 20),
    MetaDescription: setPropertyOrder(metaDescription, 30),
    MetaKeywords: setPropertyOrder(metaKeywords, 40),
    MetaRobots: setPropertyOrder(metaRobots, 80),
    CanonicalLinkPath: setPropertyOrder(canonicalLinkPath, 100),
    ImpressHeadline: {
      type: 'string',
      propertyOrder: 110,
    },
    ImpressMainContent: {
      type: 'array',
      description: 'Impress main content configurations',
      items: {
        type: 'object',
        title: 'Impress main content item',
        description: 'define label and value for the impress content items',
        properties: {
          ImpressItemLabel: {
            type: 'string',
            description: 'label of the impress item',
          },
          ImpressItemValue: {
            type: 'string',
            description: 'value of the impress item',
          },
        },
      },
      propertyOrder: 120,
    },
    ImageSourcesHeadline: {
      type: 'string',
      propertyOrder: 130,
    },
    ImageSourcePages: {
      type: 'array',
      description: 'list image source pages',
      items: {
        type: 'object',
        title: 'Impress main content item',
        description: 'define label and value for the impress content items',
        properties: {
          PageName: {
            type: 'string',
            description: 'name of the image source page',
          },
          PageLink: {
            type: 'string',
            description: 'link of the image source page, e.g. "/inspektion.html", "/index.html"',
          },
          TitleAttribute: {
            type: 'string',
            description: 'title attribute of the image source link',
          },
        },
      },
      propertyOrder: 140,
    },
    _lastModified: setPropertyOrder(lastModified, 10000),
  },
};
