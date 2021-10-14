/* 
包含应用的所有接口的接口请求函数 
函数内部调用 ajax 函数发送请求
函数返回的是 promise 对象
*/
import ajax from './ajax'

/**
 *? 首页三级菜单 GET
 */
export const reqCategoryList = () => ajax('/product/getBaseCategoryList')
/**
 *? 首页轮播图  GET
 */
export const reqBannerList = () => ajax('/cms/banner')
