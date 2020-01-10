import React, { Component } from 'react'
import headerJson from '../contents/json/header.json'

import '../HeaderLogo.css'

export default class HeaderLogo extends Component {
    handelClick(event) {
        event.preventDefault()
        this.props.animationLogo()
    }

    render() {
        return (
            <div className={ this.props.classLogoInit + " logo-header max-logo"}>
                {/* <button onClick={this.handelClick.bind(this)} > */}
                    <img onClick={
                                    this.handelClick.bind(this)} 
                                    src={headerJson.img.src} 
                                    alt={headerJson.img.alt} />
                {/* </button> */}
            </div>
        )
    }
}