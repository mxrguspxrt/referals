import React from 'react'
import BasePage from 'pages/BasePage'

class Invite extends BasePage {

  render() {
    return (
      <div className='page-content'>
        <div className='small-title'>
          Welcome to Referals app.
        </div>
        <div className='big-title'>
          Your referal is
        </div>
        <input value='xweoi3' />
        <h1>
          Log in to take use of referal
        </h1>
        <div className='success-button'>
          Log in with Twitter
        </div>
      </div>
    )
  }

}

export default Invite
