/*
  An algorithm for calculate winner from a game board.

  There is 4 major direction and 4 opposite to check:
   1  2  3
   4  X -4
  -3 -2 -1
*/
const d1 = {
  nextY: y => y - 1,
  nextX: x => x - 1
}

const dR1 = {
  nextY: y => y + 1,
  nextX: x => x + 1
}

const d2 = {
  nextY: y => y - 1,
  nextX: x => x
}

const dR2 = {
  nextY: y => y + 1,
  nextX: x => x
}

const d3 = {
  nextY: y => y - 1,
  nextX: x => x + 1
}

const dR3 = {
  nextY: y => y + 1,
  nextX: x => x - 1
}

const d4 = {
  nextY: y => y,
  nextX: x => x - 1
}

const dR4 = {
  nextY: y => y,
  nextX: x => x + 1
}

export default function calcWinner (state, action) {
  const param = {
    board: state.board,
    size: state.boardSize,
    color: action.color,
    startY: action.y,
    startX: action.x
  }

  const win = (count(param, d1) + count(param, dR1) === 4) ||
        (count(param, d2) + count(param, dR2) === 4) ||
        (count(param, d3) + count(param, dR3) === 4) ||
        (count(param, d4) + count(param, dR4) === 4)

  if (win) return action.color
  else return null
}

function count ({ board, size, color, startY, startX }, { nextY, nextX }) {
  var y = nextY(startY)
  var x = nextX(startX)
  var _count = 0
  while (y >= 0 && y < size && x >= 0 && x < size) {
    if (board[y][x] !== color) break
    _count++
    y = nextY(y)
    x = nextX(x)
  }
  return _count
}
