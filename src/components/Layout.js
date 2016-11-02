import React, { Component } from 'react'
import Home from './Home'

export default class Layout extends Component {
  render () {
    return (
      <div className="container">
        <h1 className="appTitle">Monster Hunter Journal</h1>
        <Home />
      </div>
    )
  }
}
