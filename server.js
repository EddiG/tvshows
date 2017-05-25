const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.NODE_PORT, 10) || 8000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/show/:id', (req, res) => {
      const actualPage = '/show';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/shows/search/:query', (req, res) => {
      const actualPage = '/';
      const queryParams = { search: req.params.query };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      if (dev) {
        console.log(`Started dev server on http://localhost:${port}`);
      }
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
