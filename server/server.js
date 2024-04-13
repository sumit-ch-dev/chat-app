const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();


app.use(cors());

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (message) => {
        console.log('message: ' + message);
        io.emit('message', message);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on("foo", (value) => {
        console.log("foo", value);
        io.emit("foo", value);
    });

    socket.on("create-something", (value, callback) => {
        console.log("create-something", value);
        callback();
    });
}
);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});


const port = process.env.PORT || 3000;

const host = "192.168.0.21";

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});