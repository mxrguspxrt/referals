import React from 'react'

// Assets
import 'assets/styles/apps/Referals.css'

// Pages
import IndexPage from 'pages/Index'
import LoginPage from 'pages/Login'
import ProfilePage from 'pages/Profile'
import InvitePage from 'pages/Invite'

// Components
import BaseComponent from 'components/BaseComponent'
import Header from 'components/Header'

// Redux, store, sagas & routing
import createStoreAndHistory from 'initializers/createStoreAndHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import { Provider } from 'react-redux'

const { store, history } = createStoreAndHistory()

// Render Referals app
class Referals extends BaseComponent {

  componentDidMount() {
    this.dispatch({
      type: 'SYNC_USERS_REQUEST'
    })
  }

  render() {
    const referalsView = (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/invite/:referalCode" component={InvitePage} />
          </div>
        </ConnectedRouter>
      </Provider>
    )

    return referalsView
  }

}

export default Referals
