# cms

## Table of Contnets

* [TODOs](#todos)

------------------------------------------------

## How to include the cms for the portals

### necessary npm scripts

This should be included in the package.json file of the xx-website repository
```javascript
// valid values for ${countryCode}: ['DE']
{
  "scripts": {
    "ejs-renderer": "ejs-renderer",
    "serve": "node ./node_modules/cms/app/content-editor/ --CMS_CONFIG ${countryCode}",
    "update-template": "npm i cms && node ./node_modules/cms/node_scripts/updateTemplateSettings/ --CMS_CONFIG ${countryCode}"
  }
}
```

## Installation/Getting started

This project requires you to install the following things:
* nodejs version >= 8.11.1
* npm version >= 5.6.0

### Installing the dependencies
checkout the project and run the following command:

```bash
npm install
```

will install the dependencies that are required by the project.
