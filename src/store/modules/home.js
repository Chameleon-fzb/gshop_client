/* 
管理首页的数据的 vuex 子模块
*/
import {
	reqCategoryList,
	reqBannerList,
	reqRecommends,
	reqFloors,
	reqRanks,
	reqLikes
} from '@/api'

const state = {
	categoryList: [],
	bannerList: [],
	recommends: [],
	floors: [],
	ranks: [],
	likes: []
}

const actions = {
	// ? 1 异步 获取 三级分类 列表
	async getCategoryList({ commit }) {
		const result = await reqCategoryList()
		if (result.code === 200) {
			commit('RECEIVE_CATEGORY_LIST', result.data)
		}
	},
	// ? 2 异步获取轮播图 列表
	async getBannerList({ commit }) {
		const result = await reqBannerList()
		if (result.code === 200) {
			commit('RECEIVE_BANNER_LIST', result.data)
		}
	},
	// ? 3 异步获取今日推荐的 数据
	async getRecommends({ commit }) {
		const result = await reqRecommends()
		if (result.code === 200) {
			commit('RECEIVE_RECOMMENDS', result.data)
		}
	},
	// ? 4 异步获取楼层 数据
	async getFloors({ commit }) {
		const result = await reqFloors()
		if (result.code === 200) {
			commit('RECEIVE_FLOORS', result.data)
		}
	},
	// ? 5 异步获取 猜你喜欢 的数据
	async getLikes({ commit }) {
		const result = await reqLikes()
		if (result.code == 200) {
			commit('RECEIVE_LIKES', result.data)
		}
	},
	// ? 6 异步获取 排行 的数据
	async getRanks({ commit }) {
		const result = await reqRanks()
		if (result.code == 200) {
			commit('RECEIVE_RANKS', result.data)
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
	},
	// ? 3 接收 今日推荐 数据
	RECEIVE_RECOMMENDS(state, recommends) {
		state.recommends = recommends
	},
	// ? 4 接收 楼层 数据
	RECEIVE_FLOORS(state, floors) {
		state.floors = floors
	},
	// ? 5 接收 猜你喜欢 数据
	RECEIVE_LIKES(state, likes) {
		state.likes = likes
	},
	// ? 6 接收 排行 数据
	RECEIVE_RANKS(state, ranks) {
		state.ranks = ranks
	}
}

const getters = {}
export default {
	state,
	actions,
	mutations,
	getters
}
