import { all, call, put, takeEvery, take, fork, select } from 'redux-saga/effects'
import firebase from 'firebase'
import createFirebaseConnection from 'initializers/createFirebaseConnection'
import { push } from 'react-router-redux'

const authProvider = new firebase.auth.TwitterAuthProvider()
const rsf = createFirebaseConnection()
const auth = rsf.auth
const firestore = rsf.firestore

function * login(action) {
  const referalCode = action.referalCode

  try {
    const authData = yield call(auth.signInWithPopup, authProvider)
    // you cant change fields on Firebase user, so duplicate is created with function hook
    const firebaseCurrentUser = firebase.auth().currentUser
    // load user that was created by hook
    const userRef = yield call(firestore.getDocument, 'users/nOVUKxWT0uVvCaSB0Uh4')
    const user = userRef.data()

    console.log('User is', user)

    yield put({
      type: 'LOGIN_SUCCESS',
      data: user
    })

    yield put({
      type: 'CONNECT_USER_WITH_REFERAL_REQUEST',
      referalCode: referalCode
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
  const channel = firestore.channel('users')

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

    yield put({
      type: 'SYNC_USER_AUTH',
      user
    })
  }
}

function * connectUserWithReferal() {

}

function * All() {
  yield all([
    fork(syncUserAuth),
    takeEvery('LOGIN_REQUEST', login),
    takeEvery('CONNECT_USER_WITH_REFERAL_REQUEST', connectUserWithReferal),
    takeEvery('LOGOUT_REQUEST', logout),
    takeEvery('SYNC_USERS_REQUEST', syncUsers)
  ])
}

export default All
