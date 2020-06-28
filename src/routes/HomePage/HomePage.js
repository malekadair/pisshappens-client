import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Welcome from '../../components/Welcome/Welcome';
// import Nav from '../../components/Nav/Nav';
// import TokenService from '../../services/token-service'
// import WinnersApiService from '../../services/winners-api-service'
// import WinnersContext from '../../contexts/winnersContext'
// import Footer from '../../components/Footer/Footer'

import './HomePage.css'

class HomePage extends Component {
	// static contextType = WinnersContext

	componentDidMount() {
		// this.context.clearError();
		// WinnersApiService.getAllWinners()
		// 	.then(this.context.setWinners)
		// 	.catch(this.context.setError)
	}

	render() {
		return (
			<div>
				<h2>HomePage</h2>
				{/* <header>
					<Nav />
				</header>
				<main>
					<div className='HomePage'>

						{TokenService.hasAuthToken()
							? <WinnersList />
							: <Welcome />}

						<Typical
							steps={["Ready to submit your own guess?", 5000, "", 2000]}
							loop={Infinity}
							wrapper="h2"
							className='ready'
						/>
						<div>
							<Link to='/guess' className='guess-button'>Guess!</Link>
						</div>
					</div>
				</main>
				<Footer /> */}
			</div >
		)
	}
}

export default HomePage