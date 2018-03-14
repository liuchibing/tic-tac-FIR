/* the structure of a store:
 * {
 *   connected: true,
 *   loading: true,
 *   error: Error,
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
  connected,
  loading,
  error,
  gameId,
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
  result.color = color(result)
  result.winner = winner(result, action)
  return result
}

export default reducer

function connected (state = false, action) {
  switch (action.type) {
    case actions.INIT:
    case actions.INIT_FAILED:
      return false
    case actions.INIT_SUCCESS:
      return true
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

function error (state = null, action) {
  switch (action.type) {
    case actions.INIT:
    case actions.CREATE_GAME:
    case actions.ENTER_GAME:
      return null
    case actions.INIT_FAILED:
    case actions.GAME_CREATE_FAILED:
    case actions.GAME_ENTER_FAILED:
    case actions.ERROR:
      return action.e
    default:
      return state
  }
}

function gameId (state = null, action) {
  switch (action.type) {
    case actions.GAME_CREATED:
    case actions.GAME_ENTERED:
      return action.id
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
    case actions.DROP:
      let nextState = state.map((row, y) => {
        return row.map((value, x) => {
          if (y === action.y && x === action.x) return action.color
          else return value
        })
      })
      nextState[action.y][action.x] = action.color
      return nextState
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
function winner (state = { winner: null }, action) {
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
      continue
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
      continue
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
      continue
    }
    break
  }
  // direction #-2
  y = action.y + 1
  while (y >= 0 && y < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      y++
      continue
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
      continue
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
      continue
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
      continue
    }
    break
  }
  // direction #-4
  x = action.x - 1
  while (x >= 0 && x < state.boardSize) {
    if (state.board[y][x] === _color) {
      count++
      x++
      continue
    }
    break
  }
  if (count === 4) return _color
  return null
}
