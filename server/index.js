const path = require('path');
const express = require('express');

// Create a new express server instance.
const app = express();
const tracks = require('./api/routes/tracks');

app.set('view engine', 'ejs');
app.use('/musicplayer', tracks);

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
