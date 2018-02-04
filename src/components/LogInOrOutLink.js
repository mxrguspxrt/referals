import React from 'react'
import BaseComponent from 'components/BaseComponent'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class LogInOrOutLink extends BaseComponent {

  render() {
    const isLoggedIn = this.props.loggedIn

    const logInLink = (
      <Link to='/login' className='login'>
        Log in
      </Link>
    )

    const logOut = this.logOut.bind(this)

    const logOutLink = (
      <a className='login' onClick={logOut}>
        Log out
      </a>
    )

    return isLoggedIn ? logOutLink : logInLink
  }

  logOut() {
    this.dispatch({
      type: 'LOGOUT_REQUEST'
    })
  }

}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn
  }
}

export default connect(mapStateToProps)(LogInOrOutLink)
