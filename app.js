const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.post('/',function(req, res){
    var obj = {}; 
    console.log('body: ' + JSON.stringify(req.body.name));
    var rejson = JSON.stringify(req.body);
    res.send(rejson);
});

app.listen(8124, () => console.log('listening on port 8124'));