/* the structure of a store:
 * {
 *   initing: true,
 *   loading: true,
 *   isHost: true,
 *   boardSize: 15,
 *   peerRandom: 8,
 *   myRandom: 5,
 *   color: 'X',
 *   next: 'X',
 *   board: [[ 'X', ... ], ...],
 *   winner: null
 * }
 */

import { combineReducers } from 'redux'
import * as actions from './actions'

const combined = combineReducers({
  initing,
  loading,
  isHost,
  boardSize,
  peerRandom,
  myRandom,
  next,
  board
})

// root reducer
function reducer (state, action) {
  var result = combined(state, action)
  result.color = color(state)
  result.winner = winner(state, action)
  return result
}

export default reducer

function initing (state = false, action) {
  switch (action.type) {
    case actions.INIT:
      return true
    case actions.INIT_SUCCESS:
      return false
    default:
      return state
  }
}

function loading (state = false, action) {
  switch (action.type) {
    case actions.CREATE_GAME:
    case actions.ENTER_GAME:
      return true
    case actions.GAME_CREATED:
    case actions.GAME_ENTERED:
    case actions.GAME_CREATE_FAILED:
    case actions.GAME_ENTER_FAILED:
      return false
    default:
      return state
  }
}

function isHost (state = null, action) {
  switch (action.type) {
    case actions.GAME_CREATED:
      return true
    case actions.GAME_ENTERED:
      return false
    default:
      return state
  }
}

function boardSize (state = 15, action) {
  switch (action.type) {
    case actions.CHANGE_BOARD_SIZE:
      return action.boardSize
    default:
      return state
  }
}

function peerRandom (state = null, action) {
  switch (action.type) {
    case actions.PEER_RANDOM_RECEIVED:
      return action.peerRandom
    default:
      return state
  }
}

function myRandom (state = null, action) {
  switch (action.type) {
    case actions.MY_RANDOM_GENERATED:
      return action.myRandom
    default:
      return state
  }
}

function next (state = 'X', action) {
  switch (action.type) {
    case actions.DROP:
      return (state === 'X') ? 'O' : 'X'
    default:
      return state
  }
}

function board (state = Array(15).fill(Array(15).fill(null)), action) {
  switch (action.type) {
    case actions.CHANGE_BOARD_SIZE:
      return Array(action.boardSize).fill(Array(action.boardSize).fill(null))
    default:
      return state
  }
}

// this is NOT a reducer, instead a helper
function color (state = {}) {
  if (state.color) return state.color
  if (state.myRandom && state.peerRandom) {
    if (state.myRandom > state.peerRandom) return 'X'
    else if (state.myRandom < state.peerRandom) return 'O'
    else return null
  }
  return null
}

// this is NOT a reducer, instead a helper
/*
   1  2  3
   4  X -4
  -3 -2 -1
*/
function winner (state = {}, action) {
  if (state.winner) return state.winner
  if (action.type !== actions.DROP) return state.winner
  let _color = action.color
  // direction #1
  let count = 0
  let y = action.y - 1
  let x = action.x - 1
  while (y >= 0 && y < state.boardSize && x >= 0 && x < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      y--
      x--
    }
    break
  }
  // direction #-1
  y = action.y + 1
  x = action.x + 1
  while (y >= 0 && y < state.boardSize && x >= 0 && x < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      y++
      x++
    }
    break
  }
  if (count === 4) return _color

  // direction #2
  count = 0
  y = action.y - 1
  x = action.x
  while (y >= 0 && y < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      y--
    }
    break
  }
  // direction #-2
  y = action.y + 1
  while (y >= 0 && y < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      y++
    }
    break
  }
  if (count === 4) return _color

  // direction #3
  count = 0
  y = action.y - 1
  x = action.x + 1
  while (y >= 0 && y < state.boardSize && x >= 0 && x < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      y--
      x++
    }
    break
  }
  // direction #-3
  y = action.y + 1
  x = action.x - 1
  while (y >= 0 && y < state.boardSize && x >= 0 && x < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      y++
      x--
    }
    break
  }
  if (count === 4) return _color

  // direction #4
  count = 0
  y = action.y
  x = action.x - 1
  while (x >= 0 && x < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      x--
    }
    break
  }
  // direction #-4
  x = action.x - 1
  while (x >= 0 && x < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      x++
    }
    break
  }
  if (count === 4) return _color
  return null
}
