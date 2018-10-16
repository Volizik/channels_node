module.exports.isAuthorized = (socket, next) => {
    var handshakeData = socket.handshake.query;
    console.log(handshakeData);
    // make sure the handshake data looks good as before
    // if error do this:
    next(new Error('not authorized'));
    // else just call next
    // next();
};