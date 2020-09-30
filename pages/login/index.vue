<template>
	<view>
		<view>
			<u-image width="100%" height="300rpx" :src="bksrc"></u-image>
		</view>
		<view>
			<view>
				<u-input v-model="user.name" type="text" border="true" />
				<u-input v-model="value" type="password" border="true" password-icon="true" />
			</view>
			<view>
				<u-checkbox-group>
					<u-checkbox v-model="allowArags" shape="square"></u-checkbox>
				</u-checkbox-group>
				<navigator url='../statement/index'>同意博世力士乐条款</navigator>
			</view>
			<view>
				<u-button type="primary">登录</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: null,
					password: null
				},
				bksrc: "https://cdn.uviewui.com/uview/example/fade.jpg",
				allowArags: false
			};
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang='scss' scoped>
</style>
