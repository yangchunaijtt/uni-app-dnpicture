<template>
	<view>
		<view>
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[
					{
						current:0,
						name:'油箱'
					},
					{
						current:1,
						name:'控制泵组'
					},
					{
						current:2,
						name:'主泵电机泵组'
					},
					{
						current:3,
						name:'过滤器'
					},
					{
						current:4,
						name:'升降缸压力'
					}
				]
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
