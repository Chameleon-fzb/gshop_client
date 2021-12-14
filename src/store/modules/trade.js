import { reqTradeInfo } from '@/api'
const state = {
	tradeInfo: {}
}
const mutations = {
	RECEIVE_TRADE_INFO(state, tradeInfo) {
		state.tradeInfo = tradeInfo
	}
}
const actions = {
	async getTradeInfo({ commit }) {
		const result = await reqTradeInfo()
		result.code === 200 && commit('RECEIVE_TRADE_INFO', result.data)
	}
}
const getters = {
	detailArrayList: state => state.tradeInfo.detailArrayList || [],
	userAddressList: state => state.tradeInfo.userAddressList || []
}
export default {
	state,
	mutations,
	actions,
	getters
}
