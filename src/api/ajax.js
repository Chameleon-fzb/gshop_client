/* 
axios 二次封装 
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response,而直接是响应体数据
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/* 
1. 配置通用的基础路径和超时 
*/

// ? service 是一个能嘎任意ajax请求的函数,当然可以作为对象使用

const service = axios.create({
	baseURL: '/api',
	timeout: 20000 //超时时间
})

// 请求拦截器 service

service.interceptors.request.use(config => {
	// ?必须返回config
	NProgress.start()
	return config //后面会根据返回的 config 使用xhr对象发送 ajax 请求
})

// 响应拦截器

service.interceptors.response.use(
	response => {
		NProgress.done()
		return response.data
	},
	error => {
		//请求失败返回的回调
		// throw error
		NProgress.done()
		alert(error.message || '未知的请求错误')
		return Promise.reject(error)
	}
)

export default service
