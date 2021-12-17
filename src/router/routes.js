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
		component: AddCartSuccess
	},
	{
		path: '/ShopCart',
		component: ShopCart
	},
	{
		path: '/trade',
		component: Trade
	},
	{
		path: '/pay',
		component: Pay
	},
	{
		path: '/paySuccess',
		component: PaySuccess
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
