import {
	reqAddOrUpdShopCart,
	reqShopCart,
	reqUpdCartCheck,
	reqDeleteCart
} from '@/api'

const state = {
	shopCartList: []
}
const mutations = {
	RECEIVE_SHOP_CART_LIST(state, shopCartList) {
		state.shopCartList = shopCartList
	}
}
const actions = {
	/**
	 * 获取更新购物车数量信息
	 */
	async getUpdShopCartMsg(_, { skuId, skuNum }) {
		const result = await reqAddOrUpdShopCart(skuId, skuNum)
		if (result.code === 200) return 'ok'
		else return Promise.reject(new Error('failed'))
	},
	/**
	 * 获取购物车商品列表
	 **/
	async getShopCartList({ commit }) {
		const result = await reqShopCart()
		result.code === 200 && commit('RECEIVE_SHOP_CART_LIST', result.data)
	},
	/**
	 * 更新某个购物车商品的isChecked
	 **/
	async updateCartCheck(_, { skuId, isChecked }) {
		const result = await reqUpdCartCheck(skuId, isChecked)
		if (result.code === 200) return 'ok'
		else return Promise.reject(new Error('failed'))
	},
	/**
	 * 删除购物车商品
	 **/
	async deleteCart(_, skuId) {
		const result = await reqDeleteCart(skuId)
		if (result.code === 200) return 'ok'
		else return Promise.reject(new Error('failed'))
	},
	/**
	 * 更新所有购物车商品的isChecked
	 **/
	async updateAllCartCheck({ dispatch, getters }, isChecked) {
		let promiseArr = []
		getters.cartInfoList.forEach(item => {
			if (item.isChecked === isChecked) return
			let promise = dispatch('updateCartCheck', {
				skuId: item.skuId,
				isChecked
			})
			promiseArr.push(promise)
		})
		return Promise.all(promiseArr)
	}
}
const getters = {
	/**
	 * 购物车商品列表
	 */
	cartInfoList: state => {
		let cartInfo = state.shopCartList[0] || {}
		return cartInfo.cartInfoList || []
	}
}
export default { state, mutations, actions, getters }
