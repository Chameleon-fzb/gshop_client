/* 
管理登陆用户数据的 vuex 子模块
*/
import { getUserTempId, getToken, setToken } from '@/utils/userAbout'
import { reqSecurityCode, reqRegister, reqLogin } from '@/api'

const state = {
	// getUserTempId()//获取临时标识的id
	userTempId: getUserTempId(),
	securityCode: '',
	token: getToken()
}
const mutations = {
	RECEIVE_SECURITY_CODE(state, securityCode) {
		state.securityCode = securityCode
	},
	RECEIVE_LOGIN_INFO(state, loginInfo) {
		const { token } = loginInfo
		state.token = token
		setToken(token)
	}
}
const actions = {
	/** 注册 */
	async userRegister(_, userInfo) {
		const result = await reqRegister(userInfo)
		if (result.code === 200) return 'ok'
		else return Promise.reject(new Error(result.message))
	},
	/**获取验证码*/
	async getSecurityCode({ commit }, phone) {
		const result = await reqSecurityCode(phone)
		result.code === 200 && commit('RECEIVE_SECURITY_CODE', result.data)
	},
	async userLogin({ commit }, userInfo) {
		const result = await reqLogin(userInfo)
		if (result.code === 200) {
			commit('RECEIVE_LOGIN_INFO', result.data)
			return 'ok'
		} else return Promise.reject(new Error('failed'))
	}
}
const getters = {}
export default {
	state,
	mutations,
	actions,
	getters
}
