let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

io.on('connection', socket => {
  console.log('user connected');
  socket.on('UserOnline', address => {
    socket.join('Players');
    socket.broadcast.to('User is Online', address);
  });
  socket.on('UserOffline', address => {
    socket.broadcast.to('User is Offline', address);
    socket.leave('Players');
  });
});

server.listen(3010, () => {
  console.log(`started on port: 3010`);
});
