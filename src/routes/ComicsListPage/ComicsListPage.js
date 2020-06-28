import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import Nav from '../../components/Nav/Nav';
// import TokenService from '../../services/token-service'
// import WinnersApiService from '../../services/winners-api-service'
// import WinnersContext from '../../contexts/winnersContext'

// import './ComicsListPage.css'
// import Footer from '../../components/Footer/Footer';

class ComicsListPage extends Component {
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
				<h2>Comics List Page</h2>
				{/* <header>
					<Nav />
				</header>
				<main>
					<div className='ComicsListPage'>

						{TokenService.hasAuthToken()
							? <WinnersList />
							: <Welcome />}

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

export default ComicsListPage