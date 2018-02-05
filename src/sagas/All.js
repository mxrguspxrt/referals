import { call, put, takeEvery, take, fork } from 'redux-saga/effects'
import firebase from 'firebase'
import createFirebaseConnection from 'initializers/createFirebaseConnection'
import { push } from 'react-router-redux'

const authProvider = new firebase.auth.TwitterAuthProvider()
const reduxSagaFirebase = createFirebaseConnection()
const auth = reduxSagaFirebase.auth

function * login() {
  try {
    const data = yield call(auth.signInWithPopup, authProvider)

    yield put({
      type: 'LOGIN_SUCCESS',
      data: data
    })
    yield put(push('/profile'))
  }
  catch(error) {
    yield put({
      type: 'LOGIN_FAILURE',
      error: error
    })
  }
}

function * subscribeToUsers() {
  const channel = reduxSagaFirebase.firestore.channel('users')

  while(true) {
    const usersRef = yield take(channel)
    const users = usersRef.docs.map((doc) => doc.data())

    if (users) {      
      yield put({
        type: 'LOAD_USERS_SUCCESS',
        users
      })
    }
  }
}

function * logout() {
  try {
    const data = yield call(auth.signOut)
    yield put({
      type: 'LOGOUT_SUCCESS',
      data: data
    })
    yield put(push('/'))
  }
  catch(error) {
    console.log("logout fail", error)
    yield put({
      type: 'LOGOUT_FAILURE',
      error: error
    })
  }
}

function * syncUser() {
  const channel = yield call(auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) {
      yield put({
        type: 'SYNC_USER',
        user
      })
    } else {
      yield put({
        type: 'SYNC_USER',
        user: null
      })
    }
  }
}

function * All() {
  yield fork(syncUser)
  yield [
    takeEvery('LOGIN_REQUEST', login),
    takeEvery('LOGOUT_REQUEST', logout),
    takeEvery('SUBSCRIBE_TO_USERS', subscribeToUsers)
  ]
}

export default All
