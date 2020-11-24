import React, { useContext, useState } from 'react'

const ComicsContext = React.createContext({
	comicsList: [],
	error: null,
	setError: () => { },
	clearError: () => { },
	setComicsList: () => { },
	clearComicsList: () => { },
	// setReviews: () => { },
	// addReview: () => { }
})

export function useComicsContext() {
	return useContext(ComicsContext)
}
export function ComicsProvider({ children }) {
	const [comicsList, setComicsList] = useState([{ 'color': 'blue', 'name': 'gray', 'price': 1 }])
	const [error, setError] = useState(false)


	// const setError = error => {
	// 	setState({ error });
	// };

	const clearError = () => {
		setError({ error: null });
	};

	// const setComicsList = comicsList => {
	// 	setComics({ comicsList });
	// };

	const clearComicsList = () => {
		setComicsList({});
	};
	const value = {
		comicsList: comicsList,
		setComicsList: setComicsList,
		error: error,
		setError: setError,
		clearError: clearError,
		clearComicsList: clearComicsList
	};
	return (
		<ComicsContext.Provider value={value}>
			{children}
		</ComicsContext.Provider>
	)
}