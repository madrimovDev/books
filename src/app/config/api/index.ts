import { localStorage } from '@/shared/utils'
import { env } from '../env'
import axios from 'axios'
import { MD5 } from 'crypto-js'
const apiInstance = axios.create({
	baseURL: env.API_URL
})

apiInstance.interceptors.request.use(
	config => {
		const data = localStorage.getItem<Auth.SignUpResponse['data']>('data')
		if (data) {
			const method = config.method?.split('/').at(0)?.toUpperCase()
			const url = config.url
			const body = config.data
			const secret = data.secret
			config.headers['Key'] = data.key
			if (body) {
				const sign = MD5(
					`${method}${url}${JSON.stringify(body)}${secret}`
				).toString()
				config.headers['Sign'] = sign
				return config
			}
			const sign = MD5(`${method}${url}${secret}`).toString()
			config.headers['Sign'] = sign
			return config
		}
		return config
	},
	e => {
		throw e
	}
)

export const api = apiInstance
