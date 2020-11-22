import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import CopyUrl from '../../components/CopyUrl/CopyUrl';
import axios from 'axios';
// import TokenService from '../../services/token-service'
// import WinnersApiService from '../../services/winners-api-service'
// import WinnersContext from '../../contexts/winnersContext'

// import './ComicPage.css'
// import Footer from '../../components/Footer/Footer';

const ComicPage = (props) => {

	const [comic, setComic] = useState([]);
	useEffect(() => {
		console.log(props.match.params)
		const { comicId } = props.match.params

		const fetchComic = async () => {
			const response = await axios(
				`http://localhost:8000/api/comics/${comicId}`,
			);

			setComic(response.data);
		}
		fetchComic()
	}, []);
	const copyUrl = (e) => {
		e.preventDefault()
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
		</div >
	)
}


export default ComicPage