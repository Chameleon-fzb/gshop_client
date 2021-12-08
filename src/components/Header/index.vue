<template>
	<!-- 头部 -->
	<header class="header">
		<div class="top">
			<div class="container">
				<!-- 头部的第一行 登录 -->
				<div class="loginList">
					<p>尚品汇欢迎您!</p>
					<p>
						<span>请</span>
						<a href="###">登录</a>
						<a href="###" class="register">免费注册</a>
					</p>
				</div>
				<!-- 头部的第一行 导航 -->
				<div class="typeList">
					<a href="###">我的订单</a>
					<router-link to="/shopCart">我的购物车</router-link>
					<a href="###">我的尚品汇</a>
					<a href="###">尚品汇会员</a>
					<a href="###">企业采购</a>
					<a href="###">关注尚品汇</a>
					<a href="###">合作招商</a>
					<a href="###">商家后台</a>
				</div>
			</div>
		</div>
		<!-- 头部第二行 搜索区域 -->
		<div class="bottom">
			<h1 class="logoArea">
				<router-link class="logo" to="/" title="尚品汇">
					<img src="./images/logo.png" />
				</router-link>
			</h1>
			<div class="searchArea">
				<form action="###" class="searchForm">
					<input
						type="text"
						id="autocomplete"
						class="input-error input-xxlarge"
						v-model.trim="keyword"
					/>
					<button
						@click.prevent="toSearch"
						class="sui-btn btn-xlarge btn-danger"
					>
						搜索
					</button>
				</form>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			keyword: ''
		}
	},
	methods: {
		toSearch() {
			//?编程式路由导航
			const { keyword } = this
			const location = {
				name: 'search',
				query: this.$route.query
			}
			//?只有有数据时才携带params参数
			if (keyword) {
				location.params = {
					keyword
				}
			}
			// 解决重复跳转路由的错误
			//!方法一: 传入成功的回调函数
			//console.log(this.$router.push(location,()=>{}));
			// !方法二: 使用 catch 处理错误的promise
			// console.log(this.$router.push(location).catch(e)=>{
			// 	console.log(e);
			// });
			// this.keyword = ''
			// 跳转到search页面
			this.$route.name != 'search'
				? this.$router.push(location)
				: this.$router.replace(location)
			// this.$router.push(location)
		}
	},
	mounted() {
		this.$bus.$on('clearKeyword', () => {
			this.keyword = ''
		})
	},
	beforeDestroy() {
		this.$bus.$off('clearKeyword')
	}
}
</script>

<style lang="less" scoped>
.header {
	& > .top {
		background-color: #eaeaea;
		height: 30px;
		line-height: 30px;

		.container {
			width: 1200px;
			margin: 0 auto;
			overflow: hidden;

			.loginList {
				float: left;

				p {
					float: left;
					margin-right: 10px;

					.register {
						border-left: 1px solid #b3aeae;
						padding: 0 5px;
						margin-left: 5px;
					}
				}
			}

			.typeList {
				float: right;

				a {
					padding: 0 10px;

					& + a {
						border-left: 1px solid #b3aeae;
					}
				}
			}
		}
	}

	& > .bottom {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;

		.logoArea {
			float: left;

			& > .logo {
				display: block;
				margin: 25px 45px;
				img {
					width: 175px;
				}
			}
		}

		.searchArea {
			float: right;
			margin-top: 35px;

			.searchForm {
				overflow: hidden;

				input {
					box-sizing: border-box;
					width: 490px;
					height: 32px;
					padding: 0px 4px;
					border: 2px solid #ea4a36;
					float: left;

					&:focus {
						outline: none;
					}
				}

				button {
					height: 32px;
					width: 68px;
					background-color: #ea4a36;
					border: none;
					color: #fff;
					float: left;
					cursor: pointer;

					&:focus {
						outline: none;
					}
				}
			}
		}
	}
}
</style>
