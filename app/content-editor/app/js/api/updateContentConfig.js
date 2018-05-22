'use strict';

const {writeFileSync} = require('fs');
const getContentConfigPath = require('./getContentConfigPath');

module.exports = (pagePath, body) => {
  const content =
`'use strict';

module.exports = ${JSON.stringify(body, null, 2)};
`;

  writeFileSync(getContentConfigPath(pagePath), content);
};
