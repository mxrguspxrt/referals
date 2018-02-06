import { all, call, put, takeEvery, take, fork, select } from 'redux-saga/effects'
import firebase from 'firebase'
import createFirebaseConnection from 'initializers/createFirebaseConnection'
import { push } from 'react-router-redux'

import {
  loginFailure,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
  syncUserAuthSuccess,
  syncUsersSuccess
} from 'actions/All'

const authProvider = new firebase.auth.TwitterAuthProvider()
const rsf = createFirebaseConnection()
const auth = rsf.auth
const firestore = rsf.firestore

function * loadUser(uid) {
  const loadedUserRef = yield call(firestore.getDocument, 'users/' + uid)
  const loadedUser = loadedUserRef.data()
  return loadedUser
}

function * createUser(params) {
  return yield call(firestore.setDocument, 'users/' + params.uid, params)
}

function * login(action) {
  const referalCode = action.referalCode

  try {
    yield call(auth.signInWithPopup, authProvider)
    // you cant change fields on Firebase user, so duplicate is created with function hook
    const firebaseCurrentUser = firebase.auth().currentUser
    // load user that was created by hook
    const loadedUser = yield loadUser(firebaseCurrentUser.uid)
    let newUser = null

    if (!loadedUser) {
      newUser = {
        uid: firebaseCurrentUser.uid,
        displayName: firebaseCurrentUser.displayName,
        usedReferalCode: referalCode || null
      }
      yield createUser(newUser)
    }

    const user = loadedUser || newUser

    yield put(loginSuccess(user))
    yield put(push('/profile'))
  }
  catch(error) {
    yield put(loginFailure(error))
  }
}

function * syncUsers() {
  const channel = firestore.channel('users')

  while(true) {
    const usersRef = yield take(channel)
    const users = usersRef.docs.map((doc) => doc.data())

    if (users) {
      yield put(syncUsersSuccess(users))
    }
  }
}

function * logout() {
  try {
    const data = yield call(auth.signOut)
    yield put(logoutSuccess(data))
    yield put(push('/'))
  }
  catch(error) {
    yield put(logoutFailure(error))
  }
}

function * syncUserAuth() {
  const channel = yield call(auth.channel)

  while (true) {
    const firebaseUser = (yield take(channel)).user
    const user = firebaseUser && (yield loadUser(firebaseUser.uid))

    yield put(syncUserAuthSuccess(user))
  }
}


function * All() {
  yield all([
    fork(syncUserAuth),
    takeEvery('LOGIN_REQUEST', login),
    takeEvery('LOGOUT_REQUEST', logout),
    takeEvery('SYNC_USERS_REQUEST', syncUsers)
  ])
}

export default All
