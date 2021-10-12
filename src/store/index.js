/* 
vuex最核心的管理对象store ==> 仓库
*/
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import user from './modules/user'
Vue.use(Vuex)

const mutations = {
	a(state) {
		console.log(state)
	}
}
const actions = {
	b(commit) {
		console.log(commit)
	}
}
const getters = {
	c(state) {
		return state
	}
}
// 向外暴露 store 对象
export default new Vuex.Store({
	// state,
	mutations,
	actions,
	getters,
	modules: { home, user }
})
