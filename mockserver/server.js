const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 8081;

server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/pizzas': '/pizzas'
  }));
  
server.use('/api', router);
server.use(router);
server.listen(port, () => console.log(`server listening on ${port}...`));