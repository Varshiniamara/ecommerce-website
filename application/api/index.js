const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const fs = require('fs');

// Use process.cwd() to get the root of the deployment
const dbPath = path.resolve(process.cwd(), 'db.json');

// Check if db.json exists, if not use a fallback or error
// On Vercel, files in the root should be available via process.cwd()
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));
server.use(router);

module.exports = server;
