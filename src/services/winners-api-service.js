import config from '../config'
import TokenService from '../services/token-service'

const WinnersApiService = {
	getAllWinners() {
		return fetch(`${config.API_ENDPOINT}/guesses/winners`, {
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
	getById(winner_id) {
		return fetch(`${config.API_ENDPOINT}/winners/${winner_id}`, {
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
	getWinnerById(week_id) {
		return fetch(`${config.API_ENDPOINT}/winner/${week_id}`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then(res =>
				(!res.ok)
					? res.json().then(e => Promise.reject(e))
					: res.json()
			)
	}
}

export default WinnersApiService