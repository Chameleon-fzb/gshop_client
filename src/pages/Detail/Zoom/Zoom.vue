<template>
	<div class="spec-preview">
		<img :src="defaultImg.imgUrl" />
		<div class="event" @mousemove="handler"></div>
		<div class="big">
			<img :src="defaultImg.imgUrl" ref="bigImg" />
		</div>
		<div class="mask" ref="mask"></div>
	</div>
</template>

<script>
export default {
	name: 'Zoom',
	props: { imgList: Array },
	data() {
		return {
			// 显示图片的默认下标
			imgDefaultIndex: 0
		}
	},
	computed: {
		defaultImg() {
			return this.imgList[this.imgDefaultIndex] || {}
		}
	},
	methods: {
		changeIndex(index) {
			this.imgDefaultIndex = index
		},
		// 放大镜的操作
		handler(event) {
			let [mask, bigImg] = [this.$refs.mask, this.$refs.bigImg]
			// 遮罩的大小
			let [maskWidth, maskHeight] = [mask.offsetWidth, mask.offsetHeight]
			// 鼠标的位置
			let [mouseX, mouseY] = [event.offsetX, event.offsetY]
			//计算遮罩的位置
			let [left, top] = [mouseX - maskWidth / 2, mouseY - maskHeight / 2]
			// 限制不超过边框
			left < 0 && (left = 0)
			left >= maskWidth && maskWidth

			top < 0 && (top = 0)
			top >= maskHeight && (top = maskHeight)
			// 改变遮罩的位置
			mask.style.left = left + 'px'
			mask.style.top = top + 'px'
			// 改变放大镜图片位置
			bigImg.style.left = -2 * left + 'px'
			bigImg.style.top = -2 * top + 'px'
		}
	},
	mounted() {
		this.$bus.$on('changeIndex', this.changeIndex)
	}
}
</script>

<style lang="less" scope>
.spec-preview {
	position: relative;
	width: 400px;
	height: 400px;
	// border: 1px solid #ccc;

	img {
		width: 100%;
		height: 100%;
	}

	.event {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 998;
		border: 1px solid #ccc;
	}

	.mask {
		width: 50%;
		height: 50%;
		background-color: rgba(150, 150, 150, 0.3);
		position: absolute;
		left: 0;
		top: 0;
		display: none;
	}

	.big {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 399px;
		border: 1px solid #ccc;
		overflow: hidden;
		z-index: 998;
		display: none;
		background: white;

		img {
			width: 200%;
			max-width: 200%;
			height: 200%;
			position: absolute;
			top: 0;
		}
	}

	.event:hover ~ .mask,
	.event:hover ~ .big {
		display: block;
	}
}
</style>
