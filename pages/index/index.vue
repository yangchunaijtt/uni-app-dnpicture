<template>
	<view>
		<view>
			<u-image width="100%" height="300rpx" :src="bksrc"></u-image>
		</view>
		<view class="wrap">
			<u-swiper :list="swiperList" duration="1000" :circular="false" title='true'></u-swiper>
		</view>
		<view>
			<view v-for="item in navList" :key='item.title' @click='clickNav(item.url)'>
				<u-icon size="40" :name="item.name"></u-icon>
				<text>{{item.title}}</text>
			</view>
		</view>
		<view>
			<button @click='clickNavTo'>百度</button>
			<u-link href="http://www.uviewui.com">蜀道难，难于上青天</u-link>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bksrc: "https://cdn.uviewui.com/uview/example/fade.jpg",
				swiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				navList: [{
						url: '/pages/hSystemStatus/index',
						title: "液压系统状态",
						name: 'https://cdn.uviewui.com/uview/example/button.png'
					},
					{
						url: '/pages/alarmList/index',
						title: "报警清单",
						name: 'https://cdn.uviewui.com/uview/example/button.png'
					},
					{
						url: '/pages/historyCurve/index',
						title: "历史曲线",
						name: 'https://cdn.uviewui.com/uview/example/button.png'
					},
					{
						url: '/pages/healthDegree/index',
						title: "主泵健康度",
						name: 'https://cdn.uviewui.com/uview/example/button.png'
					},
				],
				mapID: "1111xxmapid"
			};
		},
		onLoad() {

		},
		methods: {
			clickNav(url) {
				console.log(url);
				uni.navigateTo({
					url: `${url}?mapID=${this.mapID}`
				})
			},
			clickNavTo() {
				console.log('点击跳转');
				uni.navigateTo({
					url: 'https://www.baidu.com/'
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
</style>
