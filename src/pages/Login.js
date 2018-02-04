import React from 'react'
import BasePage from 'pages/BasePage'

class Login extends BasePage {

  render() {
    return (
      <div className='page-content'>
        <div className='small-title'>
          Welcome to Referals app.
        </div>
        <div className='big-title'>
          Please log in to share referals.
        </div>
        <div className='success-button'>
          Log in using Twitter
        </div>
      </div>
    )
  }

}

export default Login
