import React from 'react'

function CopyUrl(props) {
	const { comicUrl, copyUrl } = props
	console.log('asdfa', props)
	return (
		<div>
			<input id='copyUrl' type='text' defaultValue={comicUrl}></input>
			<button onClick={() => copyUrl()}>Copy to clipboard</button>
		</div>
	)
}

export default CopyUrl
