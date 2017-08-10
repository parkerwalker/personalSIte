var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded( { extended: true } ) );
app.use(bodyParser.json());

var port = process.env.PORT || 4000;

app.listen( port, function(){
  console.log('server up on:', port);
});//end listen
