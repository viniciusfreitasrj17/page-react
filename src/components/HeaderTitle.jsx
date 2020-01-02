import React, { Component } from 'react'
import headerJson from '../contents/json/header.json'

export default class HeaderTitle extends Component {
    render() {
        return (
            <div className="header-title">
                {headerJson.title}
            </div>
        )
    }
}