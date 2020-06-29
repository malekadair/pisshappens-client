import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
// import Nav from '../../components/Nav/Nav';
// import TokenService from '../../services/token-service'
// import WinnersApiService from '../../services/winners-api-service'
// import WinnersContext from '../../contexts/winnersContext'

// import './ComicPage.css'
// import Footer from '../../components/Footer/Footer';

class ComicPage extends Component {
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
				<header>
					<Nav />
				</header>
				<main>
					<h2>Comic Page</h2>
				</main>
				<Footer />
				{/* <header>
					<Nav />
				</header>
				<main>
					<div className='ComicPage'>

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

export default ComicPage