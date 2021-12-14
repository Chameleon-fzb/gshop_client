import { reqTradeInfo, reqUserAddressList } from '@/api'
const state = {
	tradeInfo: {},
	userAddressList: []
}
const mutations = {
	RECEIVE_TRADE_INFO(state, tradeInfo) {
		state.tradeInfo = tradeInfo
	},
	RECEIVE_ADDRESS_LIST(state, userAddressList) {
		state.userAddressList = userAddressList
	}
}
const actions = {
	async getTradeInfo({ commit }) {
		const result = await reqTradeInfo()
		result.code === 200 && commit('RECEIVE_TRADE_INFO', result.data)
	},
	async getUserAddressList({ commit }) {
		const result = await reqUserAddressList()
		result.code === 200 && commit('RECEIVE_ADDRESS_LIST', result.data)
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
