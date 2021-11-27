import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
/*
 * 声明式导航 默认传了 一个成功的 promise
 * 编程式导航 没有传 如果重复导航 会返回一个失败的promise
 */

/* // ? 缓存原本的push方法
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// ! 指定新的push方法
VueRouter.prototype.push = function(location, onResolve, onReject) {
	// ! 如果指定了成功或失败的push方法
	if (onResolve || onReject)
		// ! 直接调用原本的push方法
		// ! originalPush ( location , onResolve , onReject ) this 不是router 而是 undefined
		return originalPush.call(this, location, onResolve, onReject)
	// ! 没有指定成功或者失败的回调 , 必须用 catch 处理
	return originalPush.call(this, location).catch(err => {
		// ! 如果是重复导航产生的错误 , 不再向外传递错误
		if (VueRouter.isNavigationFailure(err)) {
			// resolve err
			return err //产生的是一个成功的 promise , 成功 promise 的 value 为 err
		}
		// ! 如果是其他原因导航的错误,将错误向下传递
		return Promise.reject(err)
	})
}
VueRouter.prototype.replace = function(location, onResolve, onReject) {
	if (onResolve || onReject)
		return originalReplace.call(this, location, onResolve, onReject)
	return originalReplace.call(this, location).catch(err => {
		if (VueRouter.isNavigationFailure(err)) {
			return err
		}
		return Promise.reject(err)
	})
}
 */
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location, onResolve, onReject) {
	// ? 判断onResolve 和 onReject 有没有指定 指定了就直接调用 vue-router 的 push 方法
	if (onResolve || onReject)
		return originalPush.call(this, location, onResolve, onReject)
	// ? 没有指定 就用 catch 捕获错误
	return originalPush.call(this, location).catch(err => {
		// ? 判断是否为 路由重复导航的错误 如果是 返回一个成功的 promise value 为 err
		if (VueRouter.isNavigationFailure(err)) {
			return err
		}
		// ? 不是这个错误 则 返回一个失败的 Promise
		return Promise.reject(err)
	})
}
VueRouter.prototype.replace = function(location, onResolve, onReject) {
	if (onResolve || onReject)
		return originalReplace.call(this, location, onResolve, onReject)
	return originalReplace.call(this, location).catch(err => {
		if (VueRouter.isNavigationFailure(err)) {
			return err
		}
		return Promise.reject(err)
	})
}
export default new VueRouter({
	mode: 'history',
	routes,
	//滚动行为默认为最顶部
	scrollBehavior() {
		return { x: 0, y: 0 }
	}
})
