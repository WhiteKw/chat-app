const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        oringin: '*',
        credentials: true
    }
});

io.on('connection', socket => {
    socket.on('message', ({name, message}) => {
        io.emit('message', ({name, message}));
    });
})

server.listen(4000, () => {
    console.log('listening on port 4000');
});