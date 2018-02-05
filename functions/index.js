const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createUserWithDefaultReferal = functions.auth.user().onCreate(event => {
  const user = event.data;
  const uid = user.uid;
  const userParams = {
    uid: user.uid,
    displayName: user.displayName,
    used_referal: null
  }
  return admin.firestore().collection('users').add(userParams)
});
