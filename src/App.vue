<template>
	<div>
		<Header />
		<!-- 所有的一级路由都在此显示 -->
		<router-view></router-view>
		<Footer v-if="!$route.meta.isHideFooter" />
	</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
	name: 'App',
	mounted() {
		this.$store.dispatch('getCategoryList')
		this.$store.dispatch('getBannerList')
	},
	components: {
		Header,
		Footer
	}
}
</script>
