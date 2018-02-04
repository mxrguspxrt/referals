import firebaseConfig from 'configs/firebase'
import firebase from 'firebase'
import '@firebase/firestore' // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseConnection = firebase.initializeApp(firebaseConfig);
const reduxSagaFirebase = new ReduxSagaFirebase(firebaseConnection, firebase.firestore())

function createFirebaseConnection() {
  return reduxSagaFirebase
}

export default createFirebaseConnection
