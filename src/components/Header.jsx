import React, { Component } from 'react'

import HeaderContainer from './HeaderContainer.jsx'

let currety = 0

export default class Header extends Component {

  constructor() {
    super()
    this.state = {
        classLogoInit: 'animationLogo20',
        click: 0
    }
  }

  // currety = 0

  animationLogo() {

    // const currety;

    this.setState({
      click: this.state.click + 1
    })

    switch (this.state.click) {
      case 0 :
        currety = 'animationLogo20';
        break;
      case 1 :
        currety = 'animationLogo10';
        break;
      case 2 :
        currety = 'animationLogo5';
        break;
      case 3 :
        currety = 'animationLogo2-5';
        break;
      case 4 :
        currety = 'animationLogo1-25';
        break;
      case 5 :
        currety = 'animationLogo1';
        break
      default:
        currety = 'animationLogo1';
    }

    this.setState({
      classLogoInit: currety
    })

    // setTimeout(() => {
    //   this.setState({
    //     classLogoInit: 'animationLowLogo'
    //   })
    // }, 2000)
  }


  render() {
    return (
      <header className="max-header">
        <HeaderContainer  classLogoInit={this.state.classLogoInit} 
                          animationLogo={this.animationLogo.bind(this)} />
      </header>
    )
  }
}