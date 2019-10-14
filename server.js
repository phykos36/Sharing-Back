const http = require('http');
const express = require('express');
const mysql = require('mysql');
const app = express();
const hostname = '127.0.0.1'; //unused
const port = 3000;

const connection = mysql.createConnection({
  host    :  hostname,
  user    : 'master',
  password: 'nodemaria',
  database: 'studydb'
});
//app.set('view engine');
//app.use(express.static('views'));
const recordLog = function(req, res, next){
  console.log('%o : %o にアクセスしました',hostname, port);
  next();
};
app.use(recordLog);

app.get('/', function(req, res){
  let query = 'select * from studydb.Person';
  connection.query(query, (err, rows, fields) => {
    if(err) throw err;
    res.render('index', {name: 'node + mysql practice', age: rows});
  });
});
/*
app.get('/',(req, res) => {
  res.writeHead(200);
  res.write('Hello World');
  res.end();
});
*/
app.listen(port, () => console.log('listening on port 3000'));