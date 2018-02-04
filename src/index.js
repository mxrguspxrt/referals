import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ReferalsApp from 'apps/Referals'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<ReferalsApp />, document.getElementById('root'))
registerServiceWorker()
