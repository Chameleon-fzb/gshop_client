import { reqDetailInfo } from '@/api'
const state = {
	skuDetailInfo: []
}
const mutations = {
	RECEIVE_SKU_DETAIL_INFO(state, skuDetailInfo) {
		state.skuDetailInfo = skuDetailInfo
		console.log(state)
	}
}
const actions = {
	async getDetailInfo({ commit }, skuId) {
		const result = await reqDetailInfo(skuId)
		console.log(result)
		if (result.code === 200) {
			commit('RECEIVE_SKU_DETAIL_INFO', result.data)
		}
	}
}
const getters = {
	categoryView: state => state.skuDetailInfo.categoryView || {},
	skuInfo: state => state.skuDetailInfo.skuInfo || {},
	spuSaleAttrList: state => state.skuDetailInfo.spuSaleAttrList || []
}
export default { state, mutations, actions, getters }
