import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import TokenService from '../../services/token-service'


class Nav extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    };

    renderLogout() {
        return (
            <div>
                <Link className="link" onClick={this.handleLogoutClick} to="/">
                    Logout
                </Link>
            </div>
        );
    }
    renderLogin() {
        return (
            <div>
                <Link className='link' to='/login'>Login</Link>
                <Link className='link' to='/register'>Register</Link>
            </div>
        );
    }
    render() {
        return (
            <div>
                <nav className='zone sticky main-nav'>
                    <Link className='right  siteTitle' to='/'>GottaLotto</Link>
                    {TokenService.hasAuthToken()
                        ? this.renderLogout()
                        : this.renderLogin()}
                </nav>
            </div >
        )
    }
}

export default Nav
