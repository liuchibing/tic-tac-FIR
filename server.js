var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

app.use(express.static('./build'))
app.get('*', (req, res) => {
  // res.sendFile('index.html', { root: './build' })
  res.redirect('/')
})

server.listen(8080)

var rooms = {}

io.on('connection', function (socket) {
  console.log(`client ${socket.id} connected.`)
  socket.once('INIT', function (data) {
    if (data === 'Tic-Tac-FIR/1.0 CONNECT') {
      socket.emit('INIT', 'Tic-Tac-FIR/1.0 OK')
      socket.on('CREATE_GAME', handleCreateGame.bind(undefined, socket))
      socket.on('ENTER_GAME', handleEnterGame.bind(undefined, socket))
    }
  })
})

function handleCreateGame (socket) {
  // generate a new random room id
  var id
  do {
    id = ''
    for (let i = 0; i < 5; i++) {
      id += Math.floor(Math.random() * 10)
    }
  } while (id in rooms && room[id] === true)
  // register
  rooms[id] = true
  socket.join(id)
  // handle actions
  socket.on('action', (data) => {
    socket.to(id).emit('action', data)
  })
  // handle unregister
  socket.on('disconnect', () => {
    delete rooms[id]
  })
  // send success message
  socket.emit('GAME_CREATED', id)
}

function handleEnterGame (socket, id) {
  if (id in rooms) {
    socket.join(id)
    socket.to(id).emit('PEER_ENTERED')
    // handle actions
    socket.on('action', (data) => {
      socket.to(id).emit('action', data)
    })
    // send success message
    socket.emit('GAME_ENTERED')
  } else {
    socket.emit('GAME_ENTER_FAILED', '指定的ID不存在')
  }
}
