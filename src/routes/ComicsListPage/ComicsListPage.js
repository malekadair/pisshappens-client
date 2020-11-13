import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

import dummyList from '../../dummy'
import Comic from '../../components/Comic/Comic';

// import TokenService from '../../services/token-service'
// import WinnersApiService from '../../services/winners-api-service'
// import WinnersContext from '../../contexts/winnersContext'

// import './ComicsListPage.css'
// import Footer from '../../components/Footer/Footer';

class ComicsListPage extends Component {
	// static contextType = WinnersContext
	constructor(props) {
		super(props);
		this.state = {
			comicList: []
		};
	}

	componentDidMount() {
		// this.context.clearError();
		// WinnersApiService.getAllWinners()
		// 	.then(this.context.setWinners)
		// 	.catch(this.context.setError)
		this.setState({
			comicList: dummyList
		})

	}
	renderComics = () => {
		const { comicList } = this.state
		return comicList.map(comic => {
			// console.log(comic.id)
			// < p > { comic.id }</p >
			<Comic key={comic.id} comic={comic} />
		})
	}
	render() {
		return (
			<div>
				<header>
					<Nav />
				</header>
				<main>
					<h2>Comics List Page</h2>
					{this.renderComics()}
				</main>
				<Footer />
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