/* eslint-disable max-len */
'use strict';

const {setPropertyOrder} = require('../../scripts');

const {
  additionalCssFile,
  additionalJsFile,
  canonicalLinkPath,
  headFreeCode,
  headlineH2,
  lastModified,
  metaDescription,
  metaKeywords,
  metaRobots,
  pageTitle,
  stage,
  templateFile,
} = require('./schemas');

module.exports = {
  title: 'Landing Page Editor',
  type: 'object',
  properties: {
    _templateFile: setPropertyOrder(templateFile, 10),
    PageTitle: setPropertyOrder(pageTitle, 20),
    MetaDescription: setPropertyOrder(metaDescription, 30),
    MetaKeywords: setPropertyOrder(metaKeywords, 40),
    MetaRobots: setPropertyOrder(metaRobots, 80),
    CanonicalLinkPath: setPropertyOrder(canonicalLinkPath, 110),
    HeadFreeCode: setPropertyOrder(headFreeCode, 120),
    Stage: setPropertyOrder(stage, 160),
    HeadlineH2: setPropertyOrder(headlineH2, 180),
    AdditionalJsFile: setPropertyOrder(additionalJsFile, 240),
    AdditionalCssFile: setPropertyOrder(additionalCssFile, 250),
    ServicePages: {
      type: 'object',
      description: 'listing important service landing pages',
      properties: {
        ServicePageHeadline1: {
          type: 'string',
          description: '1st headline of service pages',
        },
        ServicePageHeadline2: {
          type: 'string',
          description: '2nd headline of service pages',
        },
        SelectionHintLong: {
          type: 'string',
          description: 'long selection hint for service pages, visible on desktop and tablet',
        },
        SelectionHintShort: {
          type: 'string',
          description: 'short selection hint for service pages, visible on mobile',
        },
        ServicePageList: {
          type: 'array',
          items: {
            type: 'object',
            title: 'Service page configuration',
            properties: {
              PageName: {
                type: 'string',
                description: 'name of the service page',
              },
              PageLink: {
                type: 'string',
                description: 'link of the service page, e.g. "/sth.html", "/abc.html"',
              },
            },
          },
        },
      },
      propertyOrder: 270,
    },
    AboutUsSection: {
      type: 'object',
      description: 'about us',
      properties: {
        AboutUsHeadline: {
          type: 'string',
          description: 'headline of about-us',
        },
        AboutUsParagraphs: {
          type: 'array',
          description: 'paragraphs of about-us',
          items: {
            type: 'string',
            format: 'textarea',
            description: 'one paragraph of about-us',
          },
        },
        ContactHeadline: {
          type: 'string',
          description: 'headline of contact',
        },
        ContactDetails: {
          type: 'object',
          description: 'contact information',
          properties: {
            ContactAddressLabel: {
              type: 'string',
              description: 'label of contact address',
            },
            ContactAddressValue: {
              type: 'string',
              format: 'textarea',
              description: 'value of contact address',
            },
            ContactHotlineLabel: {
              type: 'string',
              description: 'label of contact hotline',
            },
            ContactHotlineValue: {
              type: 'string',
              format: 'textarea',
              description: 'value of contact hotline',
            },
            ContactEmailLabel: {
              type: 'string',
              description: 'label of contact email',
            },
            ContactEmailValue: {
              type: 'string',
              format: 'textarea',
              description: 'value of contact email',
            },
          },
        },
      },
      propertyOrder: 300,
    },
    _lastModified: setPropertyOrder(lastModified, 10000),
  },
};
