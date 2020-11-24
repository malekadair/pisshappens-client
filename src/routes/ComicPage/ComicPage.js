import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import CopyUrl from '../../components/CopyUrl/CopyUrl';
import axios from 'axios';
import config from '../../config'
// import { useComics } from '../../contexts/ComicsContext'
// import TokenService from '../../services/token-service'
// import WinnersApiService from '../../services/winners-api-service'
// import WinnersContext from '../../contexts/winnersContext'

// import './ComicPage.css'
// import Footer from '../../components/Footer/Footer';

const ComicPage = (props) => {

	const [comic, setComic] = useState([]);
	// const { comics, setComics, error, setError, clearError, clearComics } = useComics()

	useEffect(() => {
		const { comicId } = props.match.params
		const fetchComic = async () => {
			const response = await axios(
				`${config.API_ENDPOINT}/comics/${comicId}`
			);

			setComic(response.data);
			console.log('comic', response.data)

			// setComics(response.data)
		}
		// const fetchBFComic = async () => {
		// 	const BFResponse = await axios(
		// 		`${config.BF_API_ENDPOINT}/schwindt/pisshappens/comics/attachments`
		// 	)
		// }
		fetchComic()

		// fetchBFComic()
	}, []);
	const copyUrl = (e) => {
		e.preventDefault()
		const copyText = document.querySelector('#copyUrl');

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /*For mobile devices*/

		/* Copy the text inside the text field */
		document.execCommand("copy");
	}

	const { comicId } = props.match.params;
	const comicUrl = "www.pisshappens.io/#" + props.match.url
	const { comic_url } = comic
	return (
		<div>
			<header>
				<Nav />
			</header>
			<main>
				<h2>{comic.title}</h2>
				<div className="comicItem">
					<p>Comic #{comic.id}</p>
					<p>Title: {comic.title}</p>
					<p>Description: {comic.description}</p>
					<p>Added on: {comic.date_created}</p>
					{/* <p>Comic #{props.comic.id}</p> */}
				</div>
				{/* <a href={comicUrl} target='_blank'>{comicUrl}</a> */}
				<CopyUrl copyUrl={copyUrl} comicUrl={comicUrl} />
				<section className='commentsSection'>
					<p>COMMENT</p>
					<p>COMMENT</p>
					<p>COMMENT</p>
					<p>COMMENT</p>
					<p>COMMENT</p>
					<p>COMMENT</p>
					<p>COMMENT</p>
					<p>COMMENT</p>
					<p>COMMENT</p>
					<p>COMMENT</p>
					<p>COMMENT</p>
				</section>
			</main>
			<Footer />
		</div >
	)
}


export default ComicPage