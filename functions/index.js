const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore()
const Users = firestore.collection('users')

// THIS is async and therefore makes life complicated :( 
//
// exports.createUserWithDefaultReferal = functions.auth.user().onCreate(event => {
//   const user = event.data;
//   const uid = user.uid;
//
//   const userParams = {
//     uid: uid,
//     displayName: user.displayName,
//     usedReferal: null,
//     hasLoggedIn: false
//   }
//
//   return Users.doc(uid).set(userParams)
// });
