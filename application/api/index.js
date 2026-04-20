const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
// Use a path that is relative to the internal Vercel structure
// When deployed, the root is the parent of api/
const router = jsonServer.router(path.join(__dirname, '..', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));
server.use(router);

module.exports = server;
