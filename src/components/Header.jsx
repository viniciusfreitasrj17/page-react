import React, { Component } from 'react'
import headerJson from '../contents/header.json'

export default class Header extends Component {
  render() {
    return (
        <div>{headerJson.title}</div>
    )
  }
}