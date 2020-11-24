import React, { useContext, useState } from 'react'

const CommentsContext = React.createContext({
	commentsList: [],
	error: null,
	setError: () => { },
	clearError: () => { },
	setCommentsList: () => { },
	clearCommentsList: () => { },
	// setReviews: () => { },
	// addReview: () => { }
})

export function useCommentsContext() {
	return useContext(CommentsContext)
}
export function CommentsProvider({ children }) {
	const [commentsList, setCommentsList] = useState([{ 'color': 'blue', 'name': 'gray', 'price': 1 }])
	const [error, setError] = useState(false)


	// const setError = error => {
	// 	setState({ error });
	// };

	const clearError = () => {
		setError({ error: null });
	};

	// const setCommentsList = commentsList => {
	// 	setComments({ commentsList });
	// };

	const clearCommentsList = () => {
		setCommentsList({});
	};
	const value = {
		commentsList: commentsList,
		setCommentsList: setCommentsList,
		error: error,
		setError: setError,
		clearError: clearError,
		clearCommentsList: clearCommentsList
	};
	return (
		<CommentsContext.Provider value={value}>
			{children}
		</CommentsContext.Provider>
	)
}