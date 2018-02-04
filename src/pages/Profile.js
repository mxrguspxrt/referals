import React from 'react'
import BasePage from 'pages/BasePage'

class Profile extends BasePage {

  render() {
    return (
      <div className='page-content'>
        <div className='small-title'>
          This is your profile page.
        </div>
        <div className='big-title'>
          To invite followers with your referal, share following link.
        </div>
        <input value='234abc' />
        <h1>Kitty Cat</h1>
        <h2>Registered with referal</h2>
        abcd4g
        <h2>Followers (3)</h2>
        Snow Man Ice Cube<br />
        Tupskin ALbert<br />
      </div>
    )
  }

}

export default Profile
