import { all } from 'redux-saga/effects'

function * watch () {

}

function * rootSaga () {
  yield all([
    watch()
  ])
}

export default rootSaga
