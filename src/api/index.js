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
export const reqAddOrUpdShopCart = (skuId, skuNum) =>
	ajax({
		url: `/cart/addToCart/${skuId}/${skuNum}`,
		method: 'POST'
	})
/**
 * ? 获取购物车列表
 * */
export const reqShopCart = () =>
	ajax({
		url: '/cart/cartList',
		method: 'GET'
	})
/**
 * 修改选中状态
 */
export const reqUpdCartCheck = (skuId, isChecked) =>
	ajax({
		url: `/cart/checkCart/${skuId}/${isChecked}`,
		method: 'GET'
	})
/**
 * 删除商品
 */
export const reqDeleteCart = skuId =>
	ajax({
		url: `/cart/deleteCart/${skuId}`,
		method: 'DELETE'
	})
/**注册 */
export const reqRegister = userInfo =>
	ajax({
		url: `/user/passport/register`,
		method: 'POST',
		data: userInfo
	})
/**获取验证码 */
export const reqSecurityCode = phone =>
	ajax({
		url: `/user/passport/sendCode/${phone}`,
		method: 'GET'
	})
/**注册 */
export const reqLogin = userInfo =>
	ajax({
		url: '/user/passport/login',
		method: 'POST',
		data: userInfo
	})
/**根据token获取用户信息 */
export const reqUserInfo = () =>
	ajax({
		url: '/user/passport/auth/getUserInfo',
		method: 'GET'
	})
/**退出登录  */
export const reqUserLogout = () =>
	ajax({
		url: '/user/passport/logout',
		method: 'GET'
	})
/**获取交易信息 */
export const reqTradeInfo = () =>
	ajax({
		url: '/order/auth/trade',
		method: 'GET'
	})
/**获取地址信息  */
export const reqUserAddressList = () =>
	ajax({
		url: 'user/userAddress/auth/findUserAddressList',
		method: 'GET'
	})
/**提交订单 */
export const reqSubmitOrder = (tradeNo, tradeData) =>
	ajax({
		url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
		method: 'POST',
		data: tradeData
	})
/*获取支付信息 */
export const reqPayInfo = orderId =>
	ajax({
		url: `/payment/weixin/createNative/${orderId}`,
		method: 'GET'
	})
/** 查询订单支付状态*/
export const reqPayStatus = orderId =>
	ajax({
		url: `/payment/weixin/queryPayStatus/${orderId}`,
		method: 'GET'
	})
