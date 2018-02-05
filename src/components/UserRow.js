import React from 'react'
import BaseComponent from 'components/BaseComponent'

class UserRow extends BaseComponent {

  render() {
    const user = this.props.user

    return (
      <div className='row'>
        <div className='cell'>{user.name}</div>
        <div className='cell'>{user.referal_code}</div>
        <div className='cell'>{user.used_referal_code_on_registration}</div>
        <div className='cell'>{user.followers}</div>
      </div>
    )
  }

}

export default UserRow
