/* eslint-disable no-var */
/* eslint-env browser */

/**
 * @description clean up content in SeoContent.
 *    For each of it's items, if a property has value,
 *    being an empty object, or empty array,
 *    then this property would be removed from the item.
 * @param {object} contentConfig
 * @return {object}
 */
function cleanSeoContent(contentConfig) {
  var SeoContent = contentConfig.SeoContent;
  if (SeoContent && SeoContent.length) {
    SeoContent.forEach(function(seoContentItem) {
      var keys = Object.keys(seoContentItem);
      keys.forEach(function(key) {
        var value = seoContentItem[key];
        var itemShouldBeRemoved = false;

        // test array
        if (value && value.length === 0) {
          itemShouldBeRemoved = true;
        }

        // test object
        if (
          value &&
          Object.keys(value).length === 0 &&
          value.constructor === Object
        ) {
          itemShouldBeRemoved = true;
        }

        // test empty string
        if (value === '') {
          itemShouldBeRemoved = true;
        }

        if (itemShouldBeRemoved) {
          delete seoContentItem[key];
        }
      });
    });
  }

  return contentConfig;
}

/**
 * @description disable given field in the editor
 * @param {string} field
 * @return {undefined}
 */
function disableField(field) {
  var subEditor = editor.getEditor('root.' + field);
  if (subEditor) {
    subEditor.disable();
  }
}

/**
 * @description disable fields in the editor
 * @return {undefined}
 */
function disableFields() {
  disableField('_lastModified');
}

/**
 * @description get value from given request parameter
 * @param {string} key
 * @return {string}
 */
function getQueryParam(key) {
  var output = '';
  var qs = window.location.search;

  if (qs) {
    output = qs
      .substr(1)
      .split('&')
      .map(function(item) {
        var items = item.split('=');
        var key = items[0];
        var value = items[1];
        return {
          key: key,
          value: value,
        };
      })
      .filter(function(item) {
        return item.key === key;
      })
      .map(function(item) {
        return item.value;
      })
    ;
    if (output.length === 1) {
      output = output[0];
    }
  }

  return output;
}

/**
 * @description set _lastModified with current timestamp
 * @param {object} obj
 * @return {object} obj with _lastModified set
 */
function setLastModified(obj) {
  obj._lastModified = +(new Date());
  return obj;
}


disableFields();

$('#preview').bind('click', function() {
  var pagePath = getQueryParam('pagePath');
  window.open('/' + pagePath, 'fgDev');
});

$('#submit').bind('click', function() {
  var contentConfig = cleanSeoContent(editor.getValue());
  contentConfig = setLastModified(contentConfig);
  var pagePath = getQueryParam('pagePath');

  // TODO: and json is valid
  if (pagePath) {
    var $button = $(this);
    var $previewButton = $('#preview');
    var $errorMessage = $('#errorMessage');
    $errorMessage.empty();

    $button.prop('disabled', true);
    $previewButton.prop('disabled', true);

    $.ajax({
      type: 'PUT',
      url: '/api/content?pagePath=' + pagePath,
      data: JSON.stringify(contentConfig),
      contentType: 'application/json',
      success: function() {
        window.location.reload(true);
      },
      error: function(err) {
        $errorMessage.html(err.responseText);
      },
      complete: function() {
        $button.prop('disabled', false);
        $previewButton.prop('disabled', false);
      },
    });
  }
});
