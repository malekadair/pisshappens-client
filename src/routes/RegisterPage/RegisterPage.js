import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

class RegisterPage extends Component {
	static defaultProps = {
		history: {
			push: () => { },
		},
	}

	handleRegistrationSuccess = () => {
		const { history } = this.props;
		history.push('/login');
	}

	render() {
		return (
			<section className='RegistrationPage'>
				<Nav />
				<RegistrationForm
					onRegistrationSuccess={this.handleRegistrationSuccess} />
				<Footer />
			</section>
		)
	}
}

export default RegisterPage