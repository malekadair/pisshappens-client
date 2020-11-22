import config from '../config'
import TokenService from '../services/token-service'

const WeeksApiService = {
	getCurrentWeek() {
		return fetch(`${config.API_ENDPOINT}/weeks/currentweek`, {
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

export default WeeksApiService