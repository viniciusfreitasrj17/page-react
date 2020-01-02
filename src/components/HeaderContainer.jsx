import React, { Component } from 'react'

import NavBar from './NavBar'
import HeaderLogo from './HeaderLogo.jsx'
import HeaderTitle from './HeaderTitle'

export default class HeaderContainer extends Component {
    render(){
        return (
            <div className="header-container">
                <HeaderLogo />
                <HeaderTitle />
                <NavBar />
            </div>
        )
            
    }
}