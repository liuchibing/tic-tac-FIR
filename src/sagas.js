import { all, takeEvery, call, fork, put } from 'redux-saga/effects'

import * as actions from './actions'
import * as traffics from './traffics'

function * init () {
  try {
    yield call(traffics.init)
    yield put({ type: actions.INIT_SUCCESS })
  } catch (e) {
    yield put({ type: actions.INIT_FAILED, e })
  }
}

function * createGame (dispatch, action) {
  try {
    let id = yield call(traffics.createGame)
    yield put({ type: actions.GAME_CREATED, id })
    yield call(action.history.push, '/wait')
    // wait peer
    yield fork(waitPeer, dispatch, action)
  } catch (e) {
    yield put({ type: actions.GAME_CREATE_FAILED, e })
  }
}

function * waitPeer (dispatch, action) {
  try {
    yield call(traffics.waitPeer)
    yield put({ type: actions.PEER_ENTERED })
    yield call(traffics.listen, dispatch)
    yield call(action.history.push, '/choosefirst')
  } catch (e) {
    yield put({ type: actions.GAME_CREATE_FAILED, e })
  }
}

function * enterGame (dispatch, action) {
  try {
    yield call(traffics.enterGame, action.id)
    yield put({ type: actions.GAME_ENTERED, id: action.id })
    yield call(action.history.push, '/choosefirst')
    yield call(traffics.listen, dispatch)
  } catch (e) {
    yield put({ type: actions.GAME_ENTER_FAILED, e })
  }
}

function * sendAction (action) {
  if (!action.received) {
    try {
      yield call(traffics.sendAction, { ...action, received: true })
    } catch (e) {
      put({ type: actions.ERROR, e })
    }
  }
}

function * generateMyRandom (action) {
  let r = yield call(random)
  yield put({ type: actions.MY_RANDOM_GENERATED, myRandom: r })
  try {
    yield call(traffics.sendAction, { type: actions.PEER_RANDOM_RECEIVED, peerRandom: r })
  } catch (e) {
    put({ type: actions.ERROR, e })
  }
  yield fork(watchGotoBoard, action.history)
}

function random () {
  return Math.floor(Math.random() * 10)
}

function * gotoBoard (history) {
  yield call(history.push, '/game')
}

function * watchInit () {
  yield takeEvery(actions.INIT, init)
}

function * watchCreateGame (dispatch) {
  yield takeEvery(actions.CREATE_GAME, createGame, dispatch)
}

function * watchEnterGame (dispatch) {
  yield takeEvery(actions.ENTER_GAME, enterGame, dispatch)
}

function * watchSendAction () {
  yield takeEvery([
    actions.CHANGE_BOARD_SIZE,
    actions.GOTO_BOARD,
    actions.DROP
  ], sendAction)
}

function * watchGenerateMyRandom () {
  yield takeEvery(actions.GENERATE_MY_RANDOM, generateMyRandom)
}

function * watchGotoBoard (history) {
  yield takeEvery(actions.GOTO_BOARD, gotoBoard, history)
}

function * rootSaga (dispatch) {
  yield all([
    watchInit(),
    watchCreateGame(dispatch),
    watchEnterGame(dispatch),
    watchSendAction(),
    watchGenerateMyRandom()
  ])
}

export default rootSaga
