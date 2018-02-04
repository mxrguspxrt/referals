import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Referals from 'apps/Referals'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Referals />, document.getElementById('root'))
registerServiceWorker()
