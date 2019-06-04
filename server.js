var express = require('express');

var port = process.env.PORT || 3000;

var app = express();

app.use('/', routes);

app.listen(port);

console.log('listening on ' + 'localhost:' + port);
