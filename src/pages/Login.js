import React from 'react'
import BasePage from 'pages/BasePage'

class Login extends BasePage {

  render() {
    console.log(this.props)
    const loginUsingTwitter = this.loginUsingTwitter.bind(this)

    return (
      <div className='page-content'>
        <div className='small-title'>
          Welcome to Referals app.
        </div>
        <div className='big-title'>
          Please log in to share referals.
        </div>
        <div className='success-button' onClick={loginUsingTwitter}>
          Log in using Twitter
        </div>
      </div>
    )
  }

  loginUsingTwitter() {
    this.dispatch({
      type: 'LOGIN_REQUEST'
    })
  }

}

export default Login
