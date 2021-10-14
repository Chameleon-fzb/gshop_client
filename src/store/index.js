/* 
vuex最核心的管理对象store ==> 仓库
*/
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex)

// 向外暴露 store 对象
export default new Vuex.Store({
	// state,
	// mutations,
	// actions,
	// getters,
	modules
})
