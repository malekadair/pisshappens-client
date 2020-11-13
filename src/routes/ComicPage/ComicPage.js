import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import CopyUrl from '../../components/CopyUrl/CopyUrl';
// import TokenService from '../../services/token-service'
// import WinnersApiService from '../../services/winners-api-service'
// import WinnersContext from '../../contexts/winnersContext'

// import './ComicPage.css'
// import Footer from '../../components/Footer/Footer';

const ComicPage = (props) => {
	// static contextType = WinnersContext

	// componentDidMount() {
	// 	// this.context.clearError();
	// 	// WinnersApiService.getAllWinners()
	// 	// 	.then(this.context.setWinners)
	// 	// 	.catch(this.context.setError)
	// }

	const copyUrl = () => {
		console.log('clicked')
		const copyText = document.querySelector('#copyUrl');

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /*For mobile devices*/

		/* Copy the text inside the text field */
		document.execCommand("copy");
	}
	const { comicId } = props.match.params;
	const comicUrl = "www.pisshappens.io/#" + props.match.url
	return (
		<div>
			<header>
				<Nav />
			</header>
			<main>
				<h2>Comic #{comicId}</h2>
				{/* <a href={comicUrl} target='_blank'>{comicUrl}</a> */}

				<CopyUrl copyUrl={copyUrl} comicUrl={comicUrl} />
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


export default ComicPage