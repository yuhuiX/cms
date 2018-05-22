'use strict';

module.exports = {
  type: 'string',
  format: 'textarea',
  description: `Additional HTML code that could be appended in &lt;head>, e.g.<br>
    &lt;script>someFunction();&lt;/script><br>
    &lt;style>selector {display: none;}&lt;/style>
  `,
};
