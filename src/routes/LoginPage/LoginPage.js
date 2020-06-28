import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import TokenService from '../../services/token-service'
import Nav from '../../components/Nav/Nav';
import './LoginPage.css'
import Footer from '../../components/Footer/Footer';


class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    constructor() {
        super()
        this.state = {
            loggedIn: TokenService.hasAuthToken()
                ? true : false
        }
    }

    setLoggedIn = () => {
        this.setState({
            loggedIn: TokenService.hasAuthToken()
                ? true
                : false
        })
    }

    render() {

        return (
            <section className='LoginPage'>
                <header>
                    <Nav />
                </header>
                {this.state.loggedIn ? <Redirect to='/' /> : <LoginForm
                    onLoginSuccess={this.setLoggedIn} />}
                <Footer />
            </section>
        )
    }
}

export default LoginPage