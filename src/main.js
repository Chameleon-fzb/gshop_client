import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import Pagination from './components/Pagination'
import store from './store'

import './plugins/swiper'
import './plugins/element'
import './plugins/VueLazyLoad'
import './plugins/veeValidate'
import './mock/mockServer'

Vue.config.productionTip = false

// ? 注册全局组件
Vue.component(TypeNav.name, TypeNav)
// 注册分页组件
Vue.component(Pagination.name, Pagination)

new Vue({
	beforeCreate() {
		// ? 创建事件总线
		Vue.prototype.$bus = this
	},
	el: '#app',
	store,
	router, //注册路由器 ==> 所有组件都可以直接访问2个对象 $router $route
	render: h => h(App)
})
