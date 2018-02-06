import React from 'react'
import BaseComponent from 'components/BaseComponent'
import config from 'configs/referals'

class UserRow extends BaseComponent {

  render() {
    const user = this.props.user

    return (
      <div className='row'>
        <div className='cell'>{user.displayName}</div>
        <div className='cell'>{config.siteUrl}/invite/{user.uid}</div>
        <div className='cell'>{user.usedReferalCode}</div>
      </div>
    )
  }

}

export default UserRow
