import React, { Component } from 'react'
import headerJson from '../contents/json/header.json'
import mainJson from '../contents/json/main.json'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="max-nav nav-bar">
                <ul>
                    <li><a href={'#' + Object.keys(mainJson.section)[0] + '-section'}>{headerJson.navbar[0]}</a></li>
                    <li><a href={'#' + Object.keys(mainJson.section)[1] + '-section'}>{headerJson.navbar[1]}</a></li>
                    <li><a href={'#' + Object.keys(mainJson.section)[2] + '-section'}>{headerJson.navbar[2]}</a></li>
                    <li><a href={'#' + Object.keys(mainJson.section)[3] + '-section'}>{headerJson.navbar[3]}</a></li>
                </ul>
            </nav>
        )
    }
}