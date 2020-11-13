import React, { Component } from 'react';

const Comic = (props) => {


	console.log('props', props)
	return (
		<div>
			<p>Comic #{props.comic.id}</p>
		</div>
	);
}

export default Comic;