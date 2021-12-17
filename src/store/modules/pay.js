import { reqPayInfo, reqPayStatus } from '@/api'

const state = {
	payInfo: {}
}
const mutations = {
	RECEIVE_PAY_INFO(state, payInfo) {
		state.payInfo = payInfo
	}
}
const actions = {
	async getPayInfo({ commit }, orderNo) {
		const result = await reqPayInfo(orderNo)
		result.code === 200 && commit('RECEIVE_PAY_INFO', result.data)
	},
	async getPayStatus(_, orderNo) {
		const result = await reqPayStatus(orderNo)
		if (result.code === 200) {
			return 'ok'
		} else return Promise.reject(new Error('未支付'))
	}
}
const getters = {}
export default {
	state,
	mutations,
	actions,
	getters
}
