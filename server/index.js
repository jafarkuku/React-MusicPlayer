const path = require('path');

const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index', {
    content: 'Index Page',
  });
});

app.use(express.static(path.join('./client', 'public')));

const startServer = config =>
  app.listen(config.port, () =>
  // eslint-disable-next-line no-console
    console.log(`Listening on port ${config.port}`));

module.exports.startServer = startServer;
