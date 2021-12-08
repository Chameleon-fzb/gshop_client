/* 
管理登陆用户数据的 vuex 子模块
*/
import { reqShopCart } from '@/api'
import { getUserTempId } from '@/utils/userAbout'
const state = {
	// getUserTempId()//获取临时标识的id
	userTempId: getUserTempId(),
	shopCartList: []
}
const mutations = {
	RECEIVE_SHOP_CART_LIST(state, shopCartList) {
		state.shopCartList = shopCartList
	}
}
const actions = {
	async getShopCartList({ commit }) {
		const result = await reqShopCart()
		result.code === 200 && commit('RECEIVE_SHOP_CART_LIST', result.data)
	}
}
const getters = {}
export default {
	state,
	mutations,
	actions,
	getters
}
