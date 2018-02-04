import React from 'react'
import BasePage from 'pages/BasePage'
import { connect } from 'react-redux'

class Profile extends BasePage {

  render() {
    const user = this.props.user

    if (!user) {
      return (
        <div className='page-content'>
          Please log in to see your profile.
        </div>
      )
    }

    return (
      <div className='page-content'>
        <h1>{ user.displayName }</h1>
        <div className='big-title'>
          To invite followers with your referal, share following link.
        </div>
        <input value='referals.wave.ee/invite/xweoi3' />
        <h2>Registered with referal</h2>
        abcd4g
        <h2>Followers (3)</h2>
        Snow Man Ice Cube<br />
        Tupskin ALbert<br />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.login.user
  }
}

export default connect(mapStateToProps)(Profile)
