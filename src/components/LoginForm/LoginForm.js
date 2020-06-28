import React, { Component } from "react";
import Typical from 'react-typical'
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import { Link } from 'react-router-dom'
import './LoginForm.css'
import avatar from '../../img/avatar.svg'
import UserContext from "../../contexts/userContext";

class LoginForm extends Component {
	static contextType = UserContext
	static defaultProps = {
		onLoginSuccess: () => { }
	}

	state = { error: null };

	handleSubmitJwtAuth = ev => {
		ev.preventDefault();
		this.setState({ error: null });
		const { user_name, password } = ev.target;

		AuthApiService.postLogin({
			user_name: user_name.value,
			password: password.value
		})
			.then(res => {
				const { dbUser } = res
				user_name.value = "";
				password.value = "";
				TokenService.saveAuthToken(res.authToken);
				this.context.setUser(dbUser)
				this.props.onLoginSuccess();
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
	};

	render() {
		const { error } = this.state;
		return (
			<section className="login">
				<Typical
					steps={["Login", 1000, "", 500]}
					loop={Infinity}
					wrapper="h2"
				/>
				<div className="loginText">
					<p>To demo the platform use:</p>
					<p>User Name: admin</p>
					<p>Password: admin</p>
				</div>
				<form className="loginForm" onSubmit={this.handleSubmitJwtAuth}>
					<div className='error-login' role="alert">{error && <p className="red-login">{error}</p>}</div>
					<div className="imgcontainer">
						<img src={avatar} alt="Avatar" className="avatar"></img>
					</div>

					<div className="formItem">
						<label htmlFor="user_name">User Name:</label>
						<input
							type="text"
							placeholder="Enter User Name"
							name="user_name"
							value={this.state.user_name}
							required
						/>
					</div>
					<br />
					<div className="formItem">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
							value={this.state.password}
							required
						/>
					</div>
					<br />
					<button type="submit" className='login-btn'>Login</button>
				</form>

				<div className='loginBottom'>
					<p className='form-link'>Need to create an account? <Link to='/register'>Register</Link></p>
					<Link to="/" className="aButton loginBottomButton">
						Go Back Home
          </Link>
				</div>
			</section>
		);
	}
}

export default LoginForm;
