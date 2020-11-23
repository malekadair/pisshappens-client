import React, { useContext, useState, Children } from 'react'
import { blue, gray } from 'color-name';

const ComicsContext = React.createContext({
	comicsList: [],
	error: null,
	setError: () => { },
	clearError: () => { },
	setComics: () => { },
	clearComics: () => { },
	// setReviews: () => { },
	// addReview: () => { }
})

export function useComics() {
	return useContext(ComicsContext)
}
export function ComicsProvider({ children }) {
	const [comics, setComics] = useState([{ 'color': 'blue', 'name': 'gray', 'price': 1 }])
	const [error, setError] = useState(false)


	// const setError = error => {
	// 	setState({ error });
	// };

	const clearError = () => {
		setState({ error: null });
	};

	// const setComicsList = comicsList => {
	// 	setComics({ comicsList });
	// };

	const clearComics = () => {
		setComics({});
	};
	const value = {
		comics: comics,
		setComics, setComics,
		error: error,
		setError: setError,
		clearError: clearError,
		// setComicsList: setComicsList,
		clearComics: clearComics
	};
	return (
		<ComicsContext.Provider value={value}>
			{children}
		</ComicsContext.Provider>
	)
}