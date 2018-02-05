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

    const referalUrl = 'https://referalsyo.firebaseapp.com/invite/' + user.uid
    const usedReferal = user.usedReferal
    const followers = user.followers || [] // || [{ displayName: 'yo', uid: '1' }]

    return (
      <div className='page-content'>
        <h1>{ user.displayName }</h1>
        <div className='big-title'>
          To invite followers with your referal, share following link.
        </div>
        <input defaultValue={referalUrl} />
        <h2>Registered with referal</h2>
        { usedReferal ? usedReferal : 'Did not use referal on registration' }
        <h2>Followers ({ followers.length })</h2>
        {
          followers.map((follower) => {
            return (
              <div key={follower.uid} className='follower'>
                { follower.displayName }
              </div>
            )
          })
        }
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
