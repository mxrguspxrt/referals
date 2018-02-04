import React, { Component } from 'react'
import Header from 'components/Header'

import logo from 'assets/images/logo.svg'
import 'assets/styles/App.css'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from 'reducers/index.js'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="app">
            <Header />
            <Route path="/" component={IndexPage}>
              <Route path="login" component={LoginPage} />
              <Route path="profile" component={ProfilePage} />
              <Route path="profile" component={ProfilePage} />
              <Route path="invite" component={InvitePage} />
            </Route>
          </div>
        </Router>
       </Provider>
    )
  }

}

export default App
