'use strict';

const {log} = require('console');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');
const Koa = require('koa');
const mount = require('koa-mount');
const path = require('path');
const router = require('koa-router')();
const serve = require('koa-static');

const api = require('./app/js/api');
const {
  countryCode,
  outputDirectory,
} = require('./app/js/configs');

const app = new Koa();
app.use(helmet());
app.use(bodyParser());

// preview start
/* app.use('/src/', express.static('./static/src/'));
app.use(
  '/src/',
  express.static(path.resolve(__dirname, `./temp/${countryCode}/src/`))
);
 */
/*
app.use(async (ctx, next) => {
  if (ctx.path === '/src/') {
    console.log('in /src/');
    await send(ctx, ctx.path, {
      root: __dirname + `./temp/${countryCode}/src/`,
    });
  } else {
    await next();
  }
});
// mapping on the target portal
app.use(async (ctx, next) => {
  if (ctx.path === '/src/') {
    await send(ctx, ctx.path, {
      root: __dirname + `./static/src/`,
    });
  } else {
    await next();
  }
});
app.use(async (ctx, next) => {
  console.log('ctx.path');
  console.log(ctx.path);
  if (ctx.path.startsWith('/edit/src/')) {
    console.log('ctx.path');
    console.log(ctx.path);
    await send(ctx, ctx.path, {
      root: path.resolve(__dirname + `./src/`),
    });
  } else {
    await next();
  }
});
 */

app.use(mount(
  '/edit/src',
  (new Koa()).use(serve(path.resolve(__dirname, `./src/`))))
);

app.use(serve(outputDirectory));
// preview end

// editor start
router.put('/api/content', async (ctx) => {
  try {
    const {
      request: {
        body,
        query,
      },
    } = ctx;
    ctx.body = await api.updateContent({body, query});
  } catch (err) {
    ctx.status = 500;
    ctx.body = {
      errorMessage: err.errorMessage,
    };

    ctx.app.emit('error', err, ctx);
  }
});
router.get('/edit/index.html', async (ctx) => {
  if (ctx.request.query && ctx.request.query.pagePath) {
    try {
      ctx.response.body = await api.getEditorPage(ctx.request.query.pagePath);
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        errorMessage: err.errorMessage,
      };

      ctx.app.emit('error', err, ctx);
    }
  } else {
    try {
      ctx.body = await api.getIndexPage();
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        errorMessage: err.errorMessage,
      };

      ctx.app.emit('error', err, ctx);
    }
  }
});
// editor end

app.on('error', (err, ctx) => {
  log('err');
  log(err);
  /* centralized error handling:
   * console.log error
   * write error to log file
   * save error and request information to database if ctx.request match sth
   * ...
  */
});


const PORT = 8080;

app.use(router.routes());

app.listen(PORT, () => {
  log(`Running on
  http://localhost:${PORT}
  `);
  log(`To access the editor:
  http://localhost:${PORT}/edit/index.html
  `);
});
