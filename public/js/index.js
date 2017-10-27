var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});
``
socket.on('newMessage', function(message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`)
  
  jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function(location) {
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My current location</a>');
  li.text(`${location.from} `);
  a.attr('href', location.url);
  li.append(a);

  jQuery('#messages').append(li);
})

jQuery('#message-form').on('submit', (e) => {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function() {

  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
  if(!navigator.geolocation) {
    return alert('Geolocation not support by your browser!');
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    socket.emit('sendLocation', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  },function() {
    alert('Unable to fetch location!')
  });
});
