/* 
管理首页的数据的 vuex 子模块
*/
import { reqCategoryList, reqBannerList } from '@/api'

const state = {
	categoryList: [],
	bannerList: []
}

const actions = {
	// ? 1 异步 获取 三级分类 列表
	async getCategoryList({ commit }) {
		const result = await reqCategoryList()
		if (result.code === 200) {
			const cateGoryList = result.data
			commit('RECEIVE_CATEGORY_LIST', cateGoryList)
		}
	},
	// ? 2 异步获取轮播图 列表
	async getBannerList({ commit }) {
		const result = await reqBannerList()
		if (result.code === 200) {
			const bannerList = result.data
			commit('RECEIVE_BANNER_LIST', bannerList)
		}
	}
}

const mutations = {
	// ? 1 接收 保存 三级 列表数据
	RECEIVE_CATEGORY_LIST(state, cateGoryList) {
		state.categoryList = cateGoryList.splice(0, 15)
	},
	// ? 2 接收 保存 轮播图 数据
	RECEIVE_BANNER_LIST(state, bannerList) {
		state.bannerList = bannerList
	}
}

const getters = {}
export default {
	state,
	actions,
	mutations,
	getters
}
