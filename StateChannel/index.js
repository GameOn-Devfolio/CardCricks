let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);
let players = [];
io.on('connection', socket => {
  socket.on('UserOnline', address => {
    //console.log('Online ', address);
    socket.join('Game');
    //socket.emit('User is Online', address);
    if (players.indexOf(address) === -1) {
      players.push(address);
    }
    io.to('Game').emit('Players', players);
  });
  socket.on('UserOffline', address => {
    //console.log('Offline ', address);
    //socket.to('Players').emit('User is Offline', address);
    socket.leave('Game');
    const index = players.indexOf(address);
    if (index !== -1) {
      players.splice(index, 1);
      io.to('Game').emit('Players', players);
    }
  });
});

server.listen(3010, () => {
  console.log(`started on port: 3010`);
});
