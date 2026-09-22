const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const path = parsedUrl.pathname;
  const query = Object.fromEntries(parsedUrl.searchParams);

  console.log(`${req.method} ${path}`);

  
  if (path === '/' && req.method === 'GET') {
    res.statusCode = 200;                              
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powered-By', 'plain-node-http');   
    res.end('Hello World\n');
  }

  
  else if (path === '/greet' && req.method === 'GET') {
    const name = query.name || 'Guest';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, ${name}!\n`);
  }


  else if (path === '/json' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello World', status: 'ok' }));
  }

  
  else if (path === '/data' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      res.statusCode = 201;                             // Created
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Data received successfully', yourdata: body }));
    });
  }

  
  else if (path === '/error') {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Simulated server error (500)\n');
  }

  
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Try: /  /greet?name=Rahul  /json  /error  (or POST to /data)');
});
