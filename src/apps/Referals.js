import React, { Component } from 'react'

// Assets
import 'assets/styles/apps/Referals.css'

// Pages
import IndexPage from 'pages/Index'
import LoginPage from 'pages/Login'
import ProfilePage from 'pages/Profile'
import InvitePage from 'pages/Invite'

// Components
import Header from 'components/Header'

// Redux, store and routing
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
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
            <Header />
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/invite" component={InvitePage} />
          </div>
        </ConnectedRouter>
      </Provider>
    )

    return referalsView
  }

}

export default Referals
