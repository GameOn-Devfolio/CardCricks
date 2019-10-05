var express = require('express');
var path = require('path');
var cors = require('cors');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
io.on('connection', function(socket) {
  console.log('a user connected');
});

app.use(cors());
app.listen(3010);
