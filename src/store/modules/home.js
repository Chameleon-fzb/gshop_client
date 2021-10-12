/* 
管理首页的数据的 vuex 子模块
*/
import { reqCategoryList } from '@/api'

const state = {
	categoryList: [],
	a: 1,
	b: 2
}

const actions = {
	// ? 1 异步获取三级分类列表
	async getCategoryList({ commit }) {
		const result = await reqCategoryList()
		if (result.code === 200) {
			const cateGoryList = result.data
			commit('RECEIVE_CATEGORY_LIST', cateGoryList)
		}
	}
}

const mutations = {
	// ? 1 接收 保存 三级 列表数据
	RECEIVE_CATEGORY_LIST(state, cateGoryList) {
		state.categoryList = cateGoryList
	}
}

const getters = {}
export default {
	state,
	actions,
	mutations,
	getters
}
