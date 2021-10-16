import axios from 'axios'
import nProgress from 'nprogress'
const mockAjax = axios.create({
	baseURL: '/mock',
	timeout: 10000
})

mockAjax.interceptors.request.use(config => {
	nProgress.start()
	return config
})

mockAjax.interceptors.response.use(
	response => {
		nProgress.done()
		return response.data
	},
	error => {
		alert(error.message || '未知错误')
		nProgress.done()
		return Promise.reject(error)
	}
)

export default mockAjax
