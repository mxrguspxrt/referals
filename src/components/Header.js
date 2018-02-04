import React from 'react'
import BaseComponent from 'components/BaseComponent'
import { Link } from 'react-router-dom'
import 'assets/styles/components/Header.css'
import LogInOrOutLink from 'components/LogInOrOutLink'

class Header extends BaseComponent {

  render() {
    return (
      <div className='header-component'>
        <Link to='/' className='site'>
          Referals
        </Link>
        <Link to='/profile' className='my-profile'>
          My profile
        </Link>
        <LogInOrOutLink />
      </div>
    )
  }

}

export default Header
