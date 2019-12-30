import React, { Component } from 'react'
import headerJson from '../contents/header.json'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="nav-bar">
                <ul>
                    <li><a href="#">{headerJson.navbar[0]}</a></li>
                    <li><a href="#">{headerJson.navbar[1]}</a></li>
                    <li><a href="#">{headerJson.navbar[2]}</a></li>
                    <li><a href="#">{headerJson.navbar[3]}</a></li>
                </ul>
                </nav>
            </div>
        )
    }
}