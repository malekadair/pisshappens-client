import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

import dummyList from '../../dummy'
import Comic from '../../components/Comic/Comic';
import axios from 'axios';
import { useComicsContext } from '../../contexts/ComicsContext'
import ComicsApiService from '../../services/comics-api-service'
import config from '../../config'

const ComicsListPage = (props) => {
	const [comics, setComics] = useState([]);
	const {
		comicsList,
		setComicsList,
		error,
		setError,
		clearErrorList,
		clearComicsList
	} = useComicsContext()

	useEffect(() => {
		const fetchComics = async () => {
			const response = await axios(
				`${config.API_ENDPOINT}/comics`
			);

			setComics(response.data);
			setComicsList(response.data)
		}
		fetchComics()
	}, []);

	// useEffect(() => {
	// 	const fetchComics = async () => {
	// 		const response = await ComicsApiService.getAllComics()

	// 		setComics(response.data);
	// 		setComicsList(response.data)
	// 	}
	// 	fetchComics()
	// }, []);

	const renderComics = () => {
		return comics.map(comic => <Comic key={comic.id} comic={comic} />)
	}

	return (
		<div>
			<Nav />
			<main>
				<h2>Comics List Page</h2>
				{renderComics()}
				{/* {comics.map(comic => { return (<Comic key={comic.id} comic={comic} />) })} */}
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


export default ComicsListPage