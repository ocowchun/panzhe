var express = require('express');
var app = express();


app.use(express.static(__dirname + '/dist'));
// app.use(express.static(__dirname + '/app/bower_components'));

app.listen(process.env.PORT || 3000);