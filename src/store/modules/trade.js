import { reqTradeInfo, reqUserAddressList, reqSubmitOrder } from '@/api'
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
	},
	RECEIVE_ORDER_NO(state, orderNo) {
		state.orderNo = orderNo
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
	},
	async submitOrder({ commit }, { tradeNo, tradeData }) {
		const result = await reqSubmitOrder(tradeNo, tradeData)
		if (result.code === 200) {
			commit('RECEIVE_ORDER_NO', result.data)
			return 'ok'
		} else return Promise.reject(new Error(result.message))
	}
}
const getters = {
	detailArrayList: state => state.tradeInfo.detailArrayList || []
}
export default {
	state,
	mutations,
	actions,
	getters
}
