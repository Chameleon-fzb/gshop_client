import { reqAddOrUpdShopCart } from '@/api'
import { reqShopCart } from '@/api'

const state = {
	shopCartList: []
}
const mutations = {
	RECEIVE_SHOP_CART_LIST(state, shopCartList) {
		state.shopCartList = shopCartList
	}
}
const actions = {
	async getUpdShopCartMsg(_, { skuId, skuNum }) {
		const result = await reqAddOrUpdShopCart(skuId, skuNum)
		if (result.code === 200) {
			return 'ok'
		} else {
			return Promise.reject(new Error('failed'))
		}
	},
	async getShopCartList({ commit }) {
		const result = await reqShopCart()
		result.code === 200 && commit('RECEIVE_SHOP_CART_LIST', result.data)
	}
}
const getters = {
	cartInfoList: state => {
		let cartInfo = state.shopCartList[0] || {}
		return cartInfo.cartInfoList || []
	}
}
export default { state, mutations, actions, getters }
