import { reqPayInfo } from '@/api'

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
	}
}
const getters = {}
export default {
	state,
	mutations,
	actions,
	getters
}
