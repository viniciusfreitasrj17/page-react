import React, { Component } from 'react'
import headerJson from '../contents/json/header.json'

import NavBar from './NavBar'

export default class Header extends Component {
  render() {
    return (
      <header className="App-Header">
        <img className="logo-header" src={headerJson.img.src} alt={headerJson.img.alt} />
        {headerJson.title}
        <NavBar />
      </header>
    )
  }
}