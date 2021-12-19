import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'
import store from '@/store'

export default [
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		name: 'search',
		path: '/search/:keyword?',
		component: Search,
		// props: true//只映射params参数
		props(route) {
			return { keyword: route.params.keyword }
		}
	},
	{
		path: '/login',
		component: Login,
		meta: {
			isHideFooter: true
		},
		beforeEnter: (to, from, next) => {
			if (store.state.user.token) {
				next('/')
			} else {
				next()
			}
		}
	},
	{
		path: '/register',
		component: Register,
		meta: {
			isHideFooter: true
		}
	},
	{
		path: '/detail/:skuId',
		component: Detail
	},
	{
		path: '/addCartSuccess',
		component: AddCartSuccess,
		beforeEnter: (to, from, next) => {
			let skuNum = to.query.skuNum
			let skuInfo = sessionStorage.getItem('SKU_INFO_KEY')
			if (skuNum && skuInfo) {
				next()
			} else {
				next('/')
			}
		}
	},
	{
		path: '/ShopCart',
		component: ShopCart
	},
	{
		path: '/trade',
		component: Trade,
		beforeEnter: (to, from, next) => {
			if (from.path === '/shopCart') {
				next()
			} else {
				next('/')
			}
		}
	},
	{
		path: '/pay',
		component: Pay,
		beforeEnter: (to, from, next) => {
			if (from.path === '/trade') {
				next()
			} else {
				next('/')
			}
		}
	},
	{
		path: '/paySuccess',
		component: PaySuccess,
		beforeEnter: (to, from, next) => {
			if (from.path === '/pay') {
				next()
			} else {
				next('/')
			}
		}
	},
	{
		path: '/center',
		component: Center,
		// redirect: '/center/myOrder',
		children: [
			{
				path: 'myOrder',
				component: MyOrder
			},
			{
				path: 'groupOrder',
				component: GroupOrder
			},
			{
				path: '',
				redirect: 'myOrder'
			}
		]
	}
]
