<template>
	<div>
		<h2>home</h2>
		<TypeNav />
		<Listcontainer />
		<TodyRecommend />
		<Like />
		<Rank />
		<Floor />
		<Brand />
	</div>
</template>
<script>
import Listcontainer from './ListContainer'
import TodyRecommend from './TodayRecommend'
import Like from './Like'
import Rank from './Rank'
import Floor from './Floor'
import Brand from './Brand'
export default {
	name: 'Home',
	components: {
		Listcontainer,
		TodyRecommend,
		Like,
		Rank,
		Floor,
		Brand
	}
}
</script>
<style>
h2 {
	color: cadetblue;
	font-size: 100px;
}
</style>
