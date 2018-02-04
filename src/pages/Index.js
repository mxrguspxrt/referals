import React from 'react'
import BasePage from 'pages/BasePage'

class Index extends BasePage {

  render() {
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
          <div className='row'>
            <div className='cell'>Margus Pärt</div>
            <div className='cell'>2093dj2</div>
            <div className='cell'>9302932</div>
            <div className='cell'>Jesus Christ, Superman, Robin</div>
          </div>
        </div>
      </div>
    )
  }

}

export default Index
