import { call, put, takeEvery, take, fork, select } from 'redux-saga/effects'
import firebase from 'firebase'
import createFirebaseConnection from 'initializers/createFirebaseConnection'
import { push } from 'react-router-redux'

const authProvider = new firebase.auth.TwitterAuthProvider()
const rsf = createFirebaseConnection()
const auth = rsf.auth

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

function * syncUsers() {
  const channel = rsf.firestore.channel('users')

  while(true) {
    const usersRef = yield take(channel)
    const users = usersRef.docs.map((doc) => doc.data())

    if (users) {
      yield put({
        type: 'SYNC_USERS_SUCCESS',
        users
      })
    }
  }
}

function * saveUserData() {
  const user = yield select(state => state.login.user)
  console.log({ user })
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

function * syncUserAuth() {
  const channel = yield call(auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) {
      yield put({
        type: 'SYNC_USER_AUTH',
        user
      })
    } else {
      yield put({
        type: 'SYNC_USER_AUTH',
        user: null
      })
    }
  }
}

function * All() {
  yield [
    fork(syncUserAuth),
    takeEvery('LOGIN_REQUEST', login),
    takeEvery('LOGOUT_REQUEST', logout),
    takeEvery('SYNC_USERS_REQUEST', syncUsers),
    takeEvery('SAVE_USER_DATA_REQUEST', saveUserData)
  ]
}

export default All
