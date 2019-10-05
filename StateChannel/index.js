let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

io.on('connection', socket => {
  console.log('user connected');
});

server.listen(3010, () => {
  console.log(`started on port: 3010`);
});
