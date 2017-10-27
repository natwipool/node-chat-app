const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to chat app',
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage', {
    form: 'Admin',
    text: 'New user has joined',
    createdAt: new Date().getTime()
  });

  socket.on('createMessage', (message) => {
    console.log('Data', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
})

server.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});