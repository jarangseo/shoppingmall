var express = require('express');
var admin = require('./routes/admin');
var path = require('path');

var app = express();
var port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.send('first app');
});

app.use('/admin', admin);

app.listen( port, function(){
    console.log('Express listening on port', port);
});