/* 
管理登陆用户数据的 vuex 子模块
*/
import {
	getUserTempId,
	getToken,
	setToken,
	removeToken
} from '@/utils/userAbout'
import {
	reqSecurityCode,
	reqRegister,
	reqLogin,
	reqUserInfo,
	reqUserLogout
} from '@/api'

const state = {
	// getUserTempId()//获取临时标识的id
	userTempId: getUserTempId(),
	securityCode: '',
	token: getToken(),
	userInfo: null
}
const mutations = {
	/**接收验证码  */
	RECEIVE_SECURITY_CODE(state, securityCode) {
		state.securityCode = securityCode
	},
	/** 接收token*/
	RECEIVE_TOKEN(state, token) {
		state.token = token
		setToken(token)
	},
	/**接收 用户信息*/
	RECEIVE_USER_INFO(state, userInfo) {
		state.userInfo = userInfo
	},
	/**重设用户信息 */
	RESET_USER_INFO(state) {
		state.token = ''
		state.userInfo = null
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
	/**用户登录 */
	async userLogin({ commit }, userInfo) {
		const result = await reqLogin(userInfo)
		if (result.code === 200) {
			commit('RECEIVE_TOKEN', result.data.token)
			return 'ok'
		} else return Promise.reject(new Error('failed'))
	},
	/*获取用户信息  */
	async getUserInfo({ commit }) {
		const result = await reqUserInfo()
		if (result.code === 200) {
			commit('RECEIVE_USER_INFO', result.data)
			return 'ok'
		} else return Promise.reject(new Error(result.message))
	},
	/**重设用户信息 */
	async resetUserInfo({ commit }) {
		removeToken()
		commit('RESET_USER_INFO')
	},
	/**退出登录 */
	async userLogout({ dispatch }) {
		const result = await reqUserLogout()
		if (result.code === 200) {
			dispatch('resetUserInfo')
			return 'ok'
		} else return Promise.reject(new Error(result.message))
	}
}
const getters = {}
export default {
	state,
	mutations,
	actions,
	getters
}
