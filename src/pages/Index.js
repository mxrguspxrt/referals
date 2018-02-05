import React from 'react'
import BasePage from 'pages/BasePage'
import UserRow from 'components/UserRow'
import { connect } from 'react-redux'

class Index extends BasePage {

  componentDidMount() {
    this.dispatch({
      type: 'SUBSCRIBE_TO_USERS'
    })
  }

  componentWillUnmount() {
    console.log('Unsubscribe from users is not implemented :(')
  }

  render() {
    const users = this.props.users

    return (
      <div className='page-content'>
        <div className='small-title'>
          Welcome to Referals app.
        </div>
        <div className='big-title'>
          They are using Referals.
        </div>
        <div className='table'>
          <div className='header'>
            <div className='cell'>User</div>
            <div className='cell'>Referal</div>
            <div className='cell'>Registered with referal</div>
            <div className='cell'>Followers</div>
          </div>
          {
            users.map((user) => {
              return <UserRow user={user} />
            })
          }
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Index)
