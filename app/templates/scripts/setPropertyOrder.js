'use strict';

module.exports = (value, propertyOrder) => {
  return Object.assign(
    {
      propertyOrder,
    },
    value
  );
};
