const http = require('http');
const express = require('express');
const app = express();
const hostname = '127.0.0.1'; //unused
const port = 3000;

app.get('/',(req, res) => {
  res.writeHead(200);
  res.write('Hello World');
  res.end();
});

app.listen(port);