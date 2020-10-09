<template>
  <view>
    <view class="">
      <u-field v-model="user.name" label="姓名" disabled="true"></u-field>
      <u-field v-model="user.email" label="邮箱" disabled="true"></u-field>
      <u-section title="服务条款" @click="clickNav"></u-section>
      <u-field
        v-model="user.accountValidity"
        label="账户有效期"
        disabled="true"
      ></u-field>
      <u-field
        v-model="user.version"
        label="版本信息"
        disabled="true"
      ></u-field>
    </view>
    <view>
      <u-button type="error" @click="loginOut">退出登录</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Yang XXX",
        email: "xxxxx.yang@bosc.com.cn",
        phone: 13218932301,
        accountValidity: "2021-01-01",
        version: "V1.1",
      },
    };
  },
  onLoad() {},
  methods: {
    clickNav() {
      uni.navigateTo({
        url: "/pages/statement/index",
      });
    },
    // 退出登录
    loginOut() {},
  },
};
</script>

<style lang='scss' scoped>
</style>
