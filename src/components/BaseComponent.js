import createStoreAndHistory from 'initializers/createStoreAndHistory'
import React, { Component } from 'react'

const { store, history } = createStoreAndHistory()

class BaseComponent extends Component {

  dispatch(params) {
    const store = this.getStore()
    store.dispatch(params)
  }

  getStore() {
    return store
  }

  render() {
    return (
      <div className="base-component">
        This is BaseComponent default.
      </div>
    )
  }

}

export default BaseComponent
