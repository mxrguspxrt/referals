import React from 'react'
import BasePage from 'pages/BasePage'
import UserRow from 'components/UserRow'
import Loading from 'components/Loading'
import { connect } from 'react-redux'

class Index extends BasePage {

  render() {
    const users = this.props.users
    const loading = this.props.loading

    if (loading) {
      return (
        <Loading />
      )
    }

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
            <div className='cell'>Personal referal</div>
            <div className='cell'>Used referal</div>
          </div>
          {
            users.map((user) => {
              return <UserRow key={user.uid} user={user} />
            })
          }
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    loading: state.users.loading,
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Index)
