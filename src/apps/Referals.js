import React, { Component } from 'react'
import Header from 'components/Header'

// Assets
import logo from 'assets/images/logo.svg'
import 'assets/styles/App.css'

// Pages
import IndexPage from 'pages/Index'
import LoginPage from 'pages/Login'
import ProfilePage from 'pages/Profile'
import InvitePage from 'pages/Invite'

// Redux, store and routing
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import enabledReducers from 'reducers/All'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...enabledReducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)


class Referals extends Component {

  render() {
    const referalsView = (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/invite" component={InvitePage} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
    console.log({ referalsView })

    return referalsView
  }

}

export default Referals
