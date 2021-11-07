import { reqSearch } from '@/api'

const state = {
	searchResult: {}
}

const mutations = {
	RECEIVE_SEARCH_RESULTS(state, searchResult) {
		state.searchResult = searchResult
	}
}
const actions = {
	async getSearchResults({ commit }, searchParams) {
		// 利用浅拷贝 拷贝一份searchParams 为了不改变原对象
		searchParams = { ...searchParams }
		Object.keys(searchParams).forEach(key => {
			// 判断为空 则 删除 优化请求参数
			if (
				searchParams[key] === '' ||
				(Array.isArray(searchParams[key]) && searchParams[key].length === 0)
			) {
				delete searchParams[key]
			}
		})
		const result = await reqSearch(searchParams)
		if (result.code === 200) {
			commit('RECEIVE_SEARCH_RESULTS', result.data)
		}
	}
}
const getters = {
	/* 商品分页列表 */
	goodsList: state => state.searchResult.goodsList || [],
	/* 属性列表 */
	attrsList: state => state.searchResult.attrsList || [],
	/* 品牌列表 */
	trademarkList: state => state.searchResult.trademarkList || []
}
export default {
	state,
	mutations,
	actions,
	getters
}
