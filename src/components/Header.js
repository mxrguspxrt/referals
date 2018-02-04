import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'assets/styles/Header.css'

class Header extends Component {

  render() {
    return (
      <div className='Header'>
        <Link to='/' className='site'>
          Referals
        </Link>
        <Link to='/profile' className='my-profile'>
          My profile
        </Link>
        <Link to='/login' className='log-in'>
          Log in
        </Link>
      </div>
    )
  }

}

export default Header
