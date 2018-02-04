import { call, put, takeEvery } from 'redux-saga/effects'
import firebase from 'firebase'
import createFirebaseConnection from 'initializers/createFirebaseConnection'

const authProvider = new firebase.auth.GoogleAuthProvider()
const reduxSagaFirebase = createFirebaseConnection()

function* loginSaga() {
  try {
    const data = yield call(reduxSagaFirebase.auth.signInWithPopup, authProvider)
    console.log(data)
    yield put({
      type: 'LOGIN_SUCCESS',
      data: data
    })
  }
  catch(error) {
    console.log(error)
    yield put({
      type: 'LOGIN_FAILURE',
      error: error
    })
  }
}

export default function* rootSaga() {
  yield [
    takeEvery('LOGIN_REQUEST', loginSaga)
  ]
}
