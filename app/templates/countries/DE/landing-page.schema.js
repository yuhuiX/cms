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
    AdditionalCriticalPathCssFile: {
      type: 'array',
      description: 'include additional css in the file from the content variable "CriticalPathCssFile"',
      options: {
        collapsed: true,
      },
      items: {
        type: 'object',
        title: 'AdditionalCriticalPathCssFile item',
        properties: {
          CriticalPathCssFile: {
            type: 'string',
            description: 'path to css file in the specific folder. e.g. "/src/css/specific/home-critical-path.min.css"',
          },
        },
      },
      propertyOrder: 130,
    },
    Stage: setPropertyOrder(stage, 160),
    HeadlineH2: setPropertyOrder(headlineH2, 200),
    Breadcrumb: {
      type: 'array',
      description: 'breadcrumb that appears in the page',
      options: {
        // collapsed: true,
      },
      items: {
        type: 'object',
        title: 'Breadcrumb item',
        properties: {
          PageName: {
            type: 'string',
            description: 'text of the link',
          },
          PageLink: {
            type: 'string',
            description: 'link to the page breadcrumb element represents. e.g. "/inspektion.html", "/index.html"',
          },
          TitleAttribute: {
            type: 'string',
            description: 'title attribute that appears as a tooltip on hover breadcrumb link',
          },
        },
      },
      propertyOrder: 210,
    },
    SeoContent: {
      type: 'array',
      description: 'SEO content configurations',
      items: {
        type: 'object',
        title: 'SEO content item',
        description: `use the above <strong>Properties</strong> button to select which SEO Content Type you would need to edit. Clicking it again would quit the selection.<br>
        Please select <strong>ONLY ONE</strong> of them.<br>
        <strong>Simple SEO text</strong> is used for editing headlines and paragraphs.<br>
        <strong>SEO image and description</strong> is used for editing images.<br>
        <strong>SEO list</strong> for editing list elements.<br>
        <strong>SEO table</strong> for editing tables.`,
        options: {
          remove_empty_properties: true,
        },
        defaultProperties: [],
        properties: {
          SeoSimpleText: {
            type: 'object',
            description: 'define either headline, or paragraph',
            title: 'Simple SEO text',
            options: {
              remove_empty_properties: true,
            },
            properties: {
              Type: {
                type: 'string',
                description: 'type of the content',
                enum: ['h3', 'h4', 'p'],
                options: {
                  enum_titles: ['Headline H3', 'Headline H4', 'Paragraph'],
                },
              },
              Text: {
                type: 'string',
                format: 'textarea',
                description: 'SEO Text',
                options: {
                  expand_height: true,
                },
              },
            },
          },
          SeoImageAndDescription: {
            type: 'object',
            description: 'edit image path and description',
            title: 'SEO image and description',
            options: {
              remove_empty_properties: true,
            },
            properties: {
              SeoImage: {
                type: 'string',
                description: 'path to the image, should start with "/src/img/", e.g. "/src/img/brake-top.jpg"',
              },
              SeoImageAltAndTitle: {
                type: 'string',
                description: 'text for accessability of the image',
              },
            },
          },
          SeoList: {
            type: 'array',
            description: 'edit list items',
            title: 'SEO list',
            items: {
              type: 'string',
              title: 'SEO list item',
            },
          },
          SeoTable: {
            type: 'object',
            description: 'table in the content',
            title: 'SEO table',
            properties: {
              THead: {
                type: 'array',
                description: 'headings of the table. Special formatting rules are integrated in the ejs template. e.g. if headings are less than body columns then last heading will be spanned to the rest of the columns',
                options: {
                  collapsed: true,
                },
                items: {
                  type: 'string',
                  title: 'heading column',
                },
              },
              TBody: {
                type: 'array',
                description: 'content of the table. Rules in ejs template e.g. if columns are more then two then text is center aligned',
                items: {
                  type: 'array',
                  title: 'table row',
                  options: {
                    collapsed: true,
                  },
                  items: {
                    type: 'string',
                    title: 'table column',
                  },
                },
              },
            },
          },
        },
      },
      propertyOrder: 220,
    },
    AnchorContent: {
      type: 'array',
      description: 'content with anchor links',
      options: {
        // collapsed: true,
      },
      items: {
        type: 'object',
        title: 'Anchor content item',
        properties: {
          AnchorHeadline: {
            type: 'string',
            description: 'headline of the anchor content item',
          },
          AnchorLinks: {
            type: 'array',
            description: 'anchor links',
            items: {
              type: 'object',
              title: 'anchor link item',
              properties: {
                LinkedText: {
                  type: 'string',
                  description: 'text for the link',
                },
                LinkURL: {
                  type: 'string',
                  description: 'relative path of the page to be used in url. e.g. "/inspektionskosten-mercedes.html"',
                },
                LinkTitle: {
                  type: 'string',
                  description: 'link title appear on hover',
                },
              },
            },
          },
        },
      },
      propertyOrder: 230,
    },
    AdditionalJsFile: setPropertyOrder(additionalJsFile, 240),
    AdditionalCssFile: setPropertyOrder(additionalCssFile, 250),
    _lastModified: setPropertyOrder(lastModified, 10000),
  },
};
