const server = require('./server');
const config = require('./server/config/development.js');

server.startServer(config);
