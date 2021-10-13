<template>
	<div>
		<type-nav />
		<h2>search</h2>
		<h2>{{ keyword }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Search',
	props: ['keyword']
}
</script>

<style lang="less" scoped></style>
