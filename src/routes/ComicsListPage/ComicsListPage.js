import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

import dummyList from '../../dummy'
import Comic from '../../components/Comic/Comic';
import axios from 'axios';

const ComicsListPage = (props) => {
	const [comics, setComics] = useState([]);
	useEffect(() => {
		const fetchComics = async () => {
			const response = await axios(
				'http://localhost:8000/api/comics',
			);

			setComics(response.data);
		}
		fetchComics()
	}, []);

	const renderComics = () => {
		return comics.map(comic => <Comic key={comic.id} comic={comic} />)
	}
	return (
		<div>
			<header>
				<Nav />
			</header>
			<main>
				<h2>Comics List Page</h2>
				{renderComics()}
				{comics.map(comic => { <Comic key={comic.id} comic={comic} /> })}
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