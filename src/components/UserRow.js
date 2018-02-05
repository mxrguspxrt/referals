import React from 'react'
import BaseComponent from 'components/BaseComponent'

class UserRow extends BaseComponent {

  render() {
    const user = this.props.user

    return (
      <div className='row'>
        <div className='cell'>{user.displayName}</div>
        <div className='cell'>{user.uid}</div>
        <div className='cell'>{user.usedReferal}</div>
      </div>
    )
  }

}

export default UserRow
