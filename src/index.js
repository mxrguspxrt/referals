import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import * as firebase from 'firebase'
import firebaseConfig from './config/firebase'

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
