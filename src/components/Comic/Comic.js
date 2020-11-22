import React from 'react';
import { Link } from "react-router-dom";


const Comic = (props) => {


	console.log('props', props)
	return (
		<Link to={`/comics/${props.comic.id}`}>
			<div className="comicItem">
				<h4>{props.comic.title}</h4>
				<p>Comic #{props.comic.id}</p>
				<p>Title: {props.comic.title}</p>
				<p>Description: {props.comic.description}</p>
				<p>Added on: {props.comic.date_created}</p>
				{/* <p>Comic #{props.comic.id}</p> */}
			</div>
		</Link>
	);
}

export default Comic;