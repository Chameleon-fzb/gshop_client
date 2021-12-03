<template>
	<swiper :options="swiperOptions">
		<!-- <div class="swiper-wrapper"> -->
		<swiper-slide
			class="swiper-slide"
			v-for="(img, index) in imgList"
			:key="img.id"
		>
			<img
				:src="img.imgUrl"
				:class="{ active: index === imgDefaultIndex }"
				@click="changeImgIndex(index)"
			/>
		</swiper-slide>
		<!-- </div> -->
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</swiper>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
	name: 'ImageList',
	data() {
		return {
			swiperOptions: {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				slidesPerView: 5,
				slidesPerGroup: 5
			},

			// 默认选中 图片 的img的 下标
			imgDefaultIndex: 0
		}
	},
	props: { imgList: Array },
	methods: {
		changeImgIndex: debounce(
			function(index) {
				if (this.imgDefaultIndex === index) return
				this.imgDefaultIndex = index
				this.$bus.$emit('changeIndex', index)
			},
			200,
			{
				leading: true,
				trailing: false
			}
		)
		// autoChangeIndex() {
		// 	const { imgDefaultIndex, imgList } = this
		// 	let index = imgDefaultIndex + 1

		// 	if (index >= imgList.length) {
		// 		this.imgDefaultIndex = 0
		// 		return
		// 	}
		// 	this.imgDefaultIndex = index
		// 	// this.changeImgIndex(this.imgDefaultIndex)
		// }
	},
	// computed: {
	// 	nextTarget() {
	// 		return this.$refs.next
	// 	},
	// 	prevTarget() {
	// 		return this.$refs.prev
	// 	}
	// },
	watch: {
		imgDefaultIndex(val) {
			this.changeImgIndex(val)
		}
	}
	// mounted() {
	// setInterval(() => {
	// 	this.autoChangeIndex()
	// }, 9000)
	// setInterval(() => {
	// 	const e = document.createEvent('MouseEvents')
	// 	e.initEvent('click', true, true)
	// 	let { prevTarget, nextTarget } = this

	// 	nextTarget.dispatchEvent(e)
	// 	// swiper-button-disabled
	// 	if (nextTarget.className.split(' ').length >= 2) {
	// 		// for (let i = 1; i <= this.imgList.length % 3; i++)
	// 		prevTarget.dispatchEvent(e)

	// 		return
	// 	}
	// 	// console.log(target.className.split(' ').length === 1)
	// }, 9000)
	// }
}
</script>

<style lang="less" scoped>
.swiper-container {
	height: 56px;
	width: 400px;
	padding: 0 12px;

	.swiper-slide {
		// width: 56px;
		// height: 56px;

		img {
			border: 1px solid #ccc;
			padding: 2px;
			width: 54px;
			height: 100%;
			display: block;
			cursor: pointer;

			&.active {
				border: 2px solid #f60;
				padding: 1px;
			}

			&:hover {
				border: 2px solid #f60;
				padding: 1px;
			}
		}
	}

	.swiper-button-next {
		left: auto;
		right: 0;
	}

	.swiper-button-prev {
		left: 0;
		right: auto;
	}

	.swiper-button-next,
	.swiper-button-prev {
		box-sizing: border-box;
		width: 12px;
		height: 56px;
		background: rgb(235, 235, 235);
		border: 1px solid rgb(204, 204, 204);
		top: 0;
		margin-top: 0;
		&::after {
			font-size: 12px;
		}
	}
}
</style>
