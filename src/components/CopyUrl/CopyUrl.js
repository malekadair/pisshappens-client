import React from 'react'

function CopyUrl(props) {
	const { comicUrl, copyUrl } = props
	console.log('asdfa', props)
	return (
		<form onSubmit={(e) => copyUrl(e)}>
			<input id='copyUrl' type='text' defaultValue={comicUrl}></input>
			<button >Copy to clipboard</button>
		</form>
	)
}

export default CopyUrl
