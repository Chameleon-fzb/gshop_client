/* 
包含应用的所有接口的接口请求函数 
函数内部调用 ajax 函数发送请求
函数返回的是 promise 对象
*/
import ajax from './ajax'
import mockAjax from './mockAjax'
/**
 * ? 首页三级菜单 GET
 **/
export const reqCategoryList = () => ajax('/product/getBaseCategoryList')
/**
 * ? 首页轮播图  GET
 **/
export const reqBannerList = () => ajax('/cms/banner')
/**
 * ? todyRecommend 今日推荐 GET
 **/
export const reqRecommends = () => mockAjax('/recommends')
/**
 * ? floor GET
 **/
export const reqFloors = () => mockAjax('/floors')
/**
 *  ?ranks GET
 */
export const reqRanks = () => mockAjax('/ranks')
/**
 * ? Like GET
 */
export const reqLikes = () => mockAjax('/likes')

/**
 * ? Search 页面
 */

export const reqSearch = searchParams => ajax.post('/list', searchParams)

/**
 * ? detail页面
 */
export const reqDetailInfo = skuId =>
	ajax({
		url: `/item/${skuId}`,
		method: 'GET'
	})
/**
 * ? addToShopCart
 */
export const reqAddOrUpdShopCart = (skuId, skuNum) => {
	ajax({
		url: `/cart/addToCart/${skuId}/${skuNum}`,
		method: 'POST'
	})
}
export const reqShopCart = () => {
	ajax({
		url: '/cart/cartList',
		methods: 'GET'
	})
}
