const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const hostname = '127.0.0.1'; 
const port = 8124;
const connection = mysql.createConnection({
    host    :  hostname,
    user    : 'master',
    password: 'nodemaria',
    database: 'studydb'
  });
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.post('/',function(req, res){
  var obj = {}; 
  var queryname = JSON.stringify(req.body.username);
  console.log('username: ' + queryname);
  connection.query("SELECT * FROM Person WHERE name = \"Hanako\"",[queryname],
  function(error, results, fields){
    console.log(JSON.stringify(results[0]));
    var rejson = JSON.parse(JSON.stringify(results[0]));
    res.send(rejson);
  });
});

app.listen(port, () => console.log('listening on port %d', port));