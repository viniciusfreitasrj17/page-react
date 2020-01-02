import React, { Component } from 'react'
import headerJson from '../contents/json/header.json'

export default class HeaderLogo extends Component {
    render() {
        return (
            <div className="logo-header max-logo">
                <img src={headerJson.img.src} alt={headerJson.img.alt} />
            </div>
        )
    }
}