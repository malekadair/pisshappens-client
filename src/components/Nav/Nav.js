import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
// import TokenService from '../../services/token-service'


const Nav = () => {
    const handleLogoutClick = () => {
        // TokenService.clearAuthToken();
    };

    const renderLogout = () => {
        return (
            <div>
                <Link className="link" onClick={this.handleLogoutClick} to="/">
                    Logout
                </Link>
            </div>
        );
    }
    const renderLogin = () => {
        return (
            <div>
                <Link className='link' to='/login'>Login</Link>
                <Link className='link' to='/register'>Register</Link>
            </div>
        );
    }
    return (
        <nav className='zone sticky main-nav'>
            <Link className='right  siteTitle' to='/'>PissHappens</Link>
            <Link className='comics' to='/comics'>See Comics</Link>
        </nav>
    )
}

export default Nav
