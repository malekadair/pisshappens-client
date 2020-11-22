import config from '../config'
import TokenService from '../services/token-service'

const GuesssesApiService = {
	getAllGuesses() {
		return fetch(`${config.API_ENDPOINT}/guesses`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then(res =>
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			)
	},
	getGuessesByWeekId(week_id) {
		return fetch(`${config.API_ENDPOINT}/guesses/${week_id}`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then(res =>
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			)
	},
	getById(guess_id) {
		return fetch(`${config.API_ENDPOINT}/guesses/${guess_id}`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then(res =>
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			)
	},

	postGuess(data) {
		const { user_id, week_id, guess_1, guess_2, guess_3, guess_4, guess_5, power_ball, message } = data
		return fetch(`${config.API_ENDPOINT}/guesses`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify({
				user_id,
				week_id,
				guess_1,
				guess_2,
				guess_3,
				guess_4,
				guess_5,
				power_ball,
				message
			}),
		})
			.then(res =>
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			)
	}
}

export default GuesssesApiService