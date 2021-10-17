<template>
	<div>
		<TypeNav />
		<Listcontainer />
		<TodyRecommend />
		<Rank />
		<Like />
		<Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
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
import { mapState } from 'vuex'
export default {
	name: 'Home',
	mounted() {
		this.$store.dispatch('getRecommends')
		this.$store.dispatch('getFloors')
		this.$store.dispatch('getLikes')
		this.$store.dispatch('getRanks')
	},
	computed: {
		...mapState({
			floors: state => state.home.floors
		})
	},
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
