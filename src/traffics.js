import * as actions from './actions'

var io = require('socket.io-client')

var socket = null

export function init () {
  return new Promise(function (resolve, reject) {
    socket = io.connect()
    var connected = false
    socket.once(actions.INIT, (data) => {
      if (data === 'Tic-Tac-FIR/1.0 OK') {
        connected = true
        resolve()
      } else {
        reject(new Error('Response incorrect.'))
      }
    })
    socket.emit(actions.INIT, 'Tic-Tac-FIR/1.0 CONNECT')
  })
}

export function createGame () {
  return new Promise(function (resolve, reject) {
    if (!socket) reject(new Error('Socket not initialized.'))
    let flag = false
    socket.once(actions.GAME_CREATED, (data) => {
      flag = true
      resolve(data)
    })
    socket.emit(actions.CREATE_GAME)
    setTimeout(() => {
      if (!flag) reject(new Error('Connection timed out.'))
    }, 10 * 1000)
  })
}

export function waitPeer () {
  return new Promise(function (resolve, reject) {
    if (!socket) reject(new Error('Socket not initialized.'))
    socket.once(actions.PEER_ENTERED, resolve)
  })
}

export function enterGame (id) {
  return new Promise(function (resolve, reject) {
    if (!socket) reject(new Error('Socket not initialized.'))
    let flag = false
    socket.once(actions.GAME_ENTERED, () => {
      flag = true
      resolve()
    })
    socket.once(actions.GAME_ENTER_FAILED, (data) => {
      reject(new Error(data))
    })
    socket.emit(actions.ENTER_GAME, id)
    setTimeout(() => {
      if (!flag) reject(new Error('Connection timed out.'))
    }, 10 * 1000)
  })
}

export function listen (dispatch) {
  socket.on('action', (data) => {
    dispatch(data)
  })
}

export function sendAction (action) {
  return new Promise(function (resolve, reject) {
    if (!socket) reject(new Error('Socket not initialized.'))
    socket.emit('action', action)
    resolve()
  })
}
