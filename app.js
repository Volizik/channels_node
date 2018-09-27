const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const connectedUsers = [];

app.get('/*', (req, res) => {
    res.json({message: 'Greetings from server!'});
});

http.listen(3000, () => { console.log('listening on *:3000'); });

module.exports.io = io;
module.exports.connectedUsers = connectedUsers;