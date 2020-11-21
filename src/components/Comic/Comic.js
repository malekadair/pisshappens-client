import React, { Component } from 'react';

const Comic = (props) => {


	console.log('props', props)
	return (
		<div>
			<h4>{props.comic.title}</h4>
			<p>Comic #{props.comic.id}</p>

		</div>
	);
}

export default Comic;