import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<footer className='zone footer-content'>
			<h2 className='footer-link footer-right'>c@2020</h2>
			<a className='footer-link grace'
				href='https://arbitraders.io/'
				target='_blank'
				rel='noopener noreferrer'>
				Kevin Schwindt
				</a>
			<a className='footer-link malek'
				href='https://malekadair.github.io/portfolio/'
				target='_blank'
				rel='noopener noreferrer'>
				Malek Adair
			</a>
		</footer>
	)
}

export default Footer