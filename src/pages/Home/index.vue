<template>
	<div>
		<TypeNav />
		<Listcontainer />
		<TodyRecommend />
		<Rank />
		<Like />
		<Floor />
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
