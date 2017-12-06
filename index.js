const server = require('./server');

const config = require(`./server/config/${process.env.NODE_ENV}`);

server.startServer(config);
