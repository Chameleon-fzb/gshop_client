<template>
	<div>
		<div class="type-nav">
			<div class="container">
				<div @mouseleave="hideFirst" @mouseenter="showFirst">
					<h2 class="all">全部商品分类</h2>
					<transition name="slide">
						<div class="sort" v-show="isShowFirst">
							<div class="all-sort-list2" @click="toSearch">
								<div
									class="item"
									v-for="(c1, index) in categoryList"
									:key="c1.categoryId"
									:class="{ active: currentIndex === index }"
									@mouseenter="showSubList(index)"
								>
									<h3>
										<a
											href="javascript:;"
											:data-categoryName="c1.categoryName"
											:data-category1Id="c1.categoryId"
										>
											{{ c1.categoryName }}
										</a>
									</h3>
									<div class="item-list clearfix">
										<div class="subitem">
											<dl
												class="fore"
												v-for="c2 in c1.categoryChild"
												:key="c2.categoryId"
											>
												<dt>
													<a
														href="javascript:;"
														:data-categoryName="c2.categoryName"
														:data-category2Id="c2.categoryId"
													>
														{{ c2.categoryName }}
													</a>
												</dt>
												<dd>
													<em
														v-for="c3 in c2.categoryChild"
														:key="c3.categoryId"
													>
														<a
															href="javascript:;"
															:data-categoryName="c3.categoryName"
															:data-category3Id="c3.categoryId"
														>
															{{ c3.categoryName }}
														</a>
													</em>
												</dd>
											</dl>
										</div>
									</div>
								</div>
							</div>
						</div>
					</transition>
				</div>
				<nav class="nav">
					<a href="###">服装城</a>
					<a href="###">美妆馆</a>
					<a href="###">尚品汇超市</a>
					<a href="###">全球购</a>
					<a href="###">闪购</a>
					<a href="###">团购</a>
					<a href="###">有趣</a>
					<a href="###">秒杀</a>
				</nav>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import throttle from 'lodash/throttle'
export default {
	name: 'TypeNav',
	data() {
		const { path } = this.$route
		const isHome = path === '/'
		return {
			currentIndex: -2, //?三种状态 -2 在 div 外 | -1 在 div内 但不再一级列表中 | >=0 当前所在 一级目录
			isHome,
			isShowFirst: isHome
		}
	},
	computed: {
		...mapState({
			categoryList: state => state.home.categoryList //函数接收的是总状态 返回值作为计算属性值
		})
	},
	methods: {
		/**
		 * * 点击导航列表进入 搜索页
		 */
		toSearch(event) {
			const {
				//取出data自定义属性的值
				categoryname,
				category1id,
				category2id,
				category3id
			} = event.target.dataset

			if (categoryname) {
				const query = { categoryName: categoryname }
				if (category1id) {
					query.category1Id = category1id
				}
				if (category2id) {
					query.category2Id = category2id
				}
				if (category3id) {
					query.category3Id = category3id
				}
				const location = {
					name: 'search',
					query,
					params: { keyword: this.$route.params.keyword }
				}
				// 跳转到search页面
				this.$route.name != 'search'
					? this.$router.push(location)
					: this.$router.replace(location)

				/**
				 * * 点击导航列表后 隐藏 列表
				 */
				this.hideFirst()
			}
		},
		/**
		 * * 显示子列表 节流
		 */
		showSubList: throttle(function(index) {
			if (this.currentIndex !== -2) {
				this.currentIndex = index
			}
		}, 200),
		/**
		 * * 显示一级列表
		 */

		showFirst() {
			this.currentIndex = -1
			if (!this.isHome) this.isShowFirst = true
		},
		/**
		 * * 非home 页面 隐藏一级列表
		 */
		hideFirst() {
			this.currentIndex = -2
			if (!this.isHome) this.isShowFirst = false
			//*  转到 其他页面
			if (!this.$route.path === '/' && this.isHome) {
				this.isHome == false
			}
		}
	}
}
</script>
<style lang="less" scoped>
.type-nav {
	border-bottom: 2px solid #e1251b;

	.container {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		position: relative;

		.all {
			width: 210px;
			height: 45px;
			background-color: #e1251b;
			line-height: 45px;
			text-align: center;
			color: #fff;
			font-size: 14px;
			font-weight: bold;
		}

		.nav {
			a {
				height: 45px;
				margin: 0 22px;
				line-height: 45px;
				font-size: 16px;
				color: #333;
			}
		}

		.sort {
			position: absolute;
			left: 0;
			top: 45px;
			width: 210px;
			height: 461px;
			background: #fafafa;
			z-index: 1000;
			*指定 过渡 的样式 &.slide-enter-active,
			&.slide-leave-active {
				transition: all 0.3s;
			}
			//*指定 隐藏 的样式
			&.slide-enter,
			&.slide-leave-to {
				opacity: 0;
				height: 0;
			}
			.all-sort-list2 {
				// width: 210px;
				// height: 461px;
				.item {
					h3 {
						line-height: 30px;
						font-size: 14px;
						font-weight: 400;
						overflow: hidden;
						padding: 0 20px;
						margin: 0;

						a {
							color: #333;
						}
					}

					.item-list {
						display: none;
						position: absolute;
						width: 734px;
						min-height: 460px;
						background: #f7f7f7;
						left: 210px;
						border: 1px solid #ddd;
						top: 0;
						z-index: 9999 !important;

						.subitem {
							float: left;
							width: 650px;
							padding: 0 4px 0 8px;

							dl {
								border-top: 1px solid #eee;
								padding: 6px 0;
								overflow: hidden;
								zoom: 1;

								&.fore {
									border-top: 0;
								}

								dt {
									float: left;
									width: 54px;
									line-height: 22px;
									text-align: right;
									padding: 3px 6px 0 0;
									font-weight: 700;
								}

								dd {
									float: left;
									width: 415px;
									padding: 3px 0 0;
									overflow: hidden;

									em {
										float: left;
										height: 14px;
										line-height: 14px;
										padding: 0 8px;
										margin-top: 5px;
										border-left: 1px solid #ccc;
									}
								}
							}
						}
					}

					&.active {
						background-color: #ddd;
						.item-list {
							display: block;
						}
					}
				}
			}
		}
	}
}
</style>
