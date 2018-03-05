var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

app.use(express.static('./build'))

server.listen(8080)

io.on('connection', function(socket) {
    console.log(`client ${socket.id} connected.`)
})
