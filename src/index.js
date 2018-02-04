import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCPQdDrQq6BhC7SzQ9DSlIDZmToZKqWR0w",
  authDomain: "referalsyo.firebaseapp.com",
  databaseURL: "https://referalsyo.firebaseio.com",
  projectId: "referalsyo",
  storageBucket: "referalsyo.appspot.com",
  messagingSenderId: "183768368168"
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
