let { io, connectedUsers } = require('./app');
const { channelsAction } = require('./actions/channels.action');
const { isAuthorized } = require('./middlewares/auth.middleware');

io.use(isAuthorized);

io.on('connection', socket => {
    console.log('inside connection');

    socket.emit('connected', {});

    socket.on('connected', function (userData) {
        connectedUsers[socket.id] = userData;
    });

    channelsAction(socket);

    socket.on('typing', function (params) {
        io.to(params['channelId']).emit('typing', params.user);
    });

    socket.on('disconnect', () => {
        connectedUsers[socket.id] = undefined;
    });
});
