import React, { Component } from 'react'
import '../styles/Header.css'

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="site">
          Referals
        </div>
        <div className="my-profile">
          My profile
        </div>
        <div className="log-in">
          Log in
        </div>
      </div>
    )
  }

}

export default Header
