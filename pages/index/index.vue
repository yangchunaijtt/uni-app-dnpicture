<template>
	<view class="content">
		<view>
			<u-cell-group>
				<u-cell-item icon="share" title="停车坐爱枫林晚" :arrow="true" arrow-direction="down"></u-cell-item>
				<u-cell-item icon="map" title="霜叶红于二月花" :arrow="false"></u-cell-item>
			</u-cell-group>
		</view>
		<view>
			<u-form :model="form" ref="uForm">
				<u-form-item label="姓名">
					<u-input v-model="form.name" />
				</u-form-item>
				<u-form-item label="简介">
					<u-input v-model="form.intro" />
				</u-form-item>
				<u-form-item label="性别">
					<u-input v-model="form.sex" type="select" />
				</u-form-item>
				<u-form-item label="水果">
					<u-checkbox-group>
						<u-checkbox v-model="item.checked" v-for="(item, index) in checkboxList" :key="index" :name="item.name">
							{{ item.name }}
						</u-checkbox>
					</u-checkbox-group>
				</u-form-item>
				<u-form-item label="味道">
					<u-radio-group v-model="radio">
						<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
							{{ item.name }}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="开关">
					<u-switch slot="right" v-model="switchVal"></u-switch>
				</u-form-item>
			</u-form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					intro: '',
					sex: ''
				},
				checkboxList: [{
						name: '苹果',
						checked: false,
						disabled: false
					},
					{
						name: '雪梨',
						checked: false,
						disabled: false
					},
					{
						name: '柠檬',
						checked: false,
						disabled: false
					}
				],
				radioList: [{
						name: '鲜甜',
						disabled: false
					},
					{
						name: '麻辣',
						disabled: false
					}
				],
				radio: '',
				switchVal: false
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
