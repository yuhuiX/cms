
function appendScript(url) {
  var element = document.createElement('script');
  element.src = url;
  document.body.appendChild(element);
}

function appendLink(url) {
  var element = document.createElement('link');
  element.href = url;
  element.rel = 'stylesheet';
  document.head.appendChild(element);
}

function onLoad() {
  var cssFiles = [];
  var jsFiles = [];

  // load at least page specific css files
  var additionalCss = window.additionalCss;
  if (additionalCss && additionalCss.length) {
    cssFiles = cssFiles.concat(additionalCss);
  }

  // load at least page specific js files
  var additionalJs = window.additionalJs;
  if (additionalJs && additionalJs.length) {
    jsFiles = jsFiles.concat(additionalJs);
  }

  cssFiles.forEach(appendLink);
  jsFiles.forEach(appendScript);
}

if (window.addEventListener) {
  window.addEventListener('load', onLoad, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', onLoad);
} else {
  window.onload = onLoad;
}
