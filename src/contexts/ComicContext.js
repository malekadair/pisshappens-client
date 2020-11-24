import React, { useContext, useState } from 'react'

const ComicContext = React.createContext({
	comicData: [],
	error: null,
	setError: () => { },
	clearError: () => { },
	setComicData: () => { },
	clearComicData: () => { },
	// setReviews: () => { },
	// addReview: () => { }
})

export function useComicContext() {
	return useContext(ComicContext)
}
export function ComicProvider({ children }) {
	const [comicData, setComicData] = useState([{ 'color': 'blue', 'name': 'gray', 'price': 1 }])
	const [error, setError] = useState(false)


	// const setError = error => {
	// 	setState({ error });
	// };

	const clearError = () => {
		setError({ error: null });
	};

	// const setComicData = comicData => {
	// 	setComic({ comicData });
	// };

	const clearComicData = () => {
		setComicData({});
	};
	const value = {
		comicData: comicData,
		setComicData: setComicData,
		error: error,
		setError: setError,
		clearError: clearError,
		clearComicData: clearComicData
	};
	return (
		<ComicContext.Provider value={value}>
			{children}
		</ComicContext.Provider>
	)
}