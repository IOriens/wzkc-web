import React, { Component } from 'react'

import './Header.scss'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <icon className="site-logo">T</icon>
                    <a className="user-avatar" href="https://github.com/IOriens/wzkc-web">
                        <img src={require('../../img/favicon.ico')} />
                    </a>
                </div>
            </header>
        )
    }
}

export default Header