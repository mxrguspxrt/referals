import React from 'react'
import BasePage from 'pages/BasePage'
import { connect } from 'react-redux'

class Invite extends BasePage {

  render() {
    const loginUsingTwitter = this.loginUsingTwitter.bind(this)
    const user = this.props.user
    const referalCode = this.props.match.params.referalCode

    if (user) {
      return (
        <div className='page-content'>
          <div className='small-title'>
            Sorry, referals are only for new users.
          </div>
        </div>
      )
    }

    return (
      <div className='page-content'>
        <div className='small-title'>
          Your referal is
        </div>
        <div className='big-title'>
           { referalCode }
        </div>


        Log in to take use of referal<br /><br />

        <div className='success-button' onClick={ () => loginUsingTwitter(referalCode) } >
          Log in with Twitter
        </div>
      </div>
    )
  }

  loginUsingTwitter(referalCode) {
    this.dispatch({
      type: 'LOGIN_REQUEST',
      referalCode
    })
  }

}

function mapStateToProps(state) {
  return {
    loading: state.login.loading,
    user: state.login.user
  }
}

export default connect(mapStateToProps)(Invite)
