const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
const hostname = '127.0.0.1'; 
const port = 3000;

const recordLog = function(req, res, next){
  console.log('%o : %o にアクセスしました',hostname, port);
  next();
};
app.use(recordLog);

app.get('/', function(req, res){
  res.sendfile('index.html');
});
app.listen(port, () => console.log('listening on port %d', port));