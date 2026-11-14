<template>
  <div class="profile-page">
    <!-- 头部:头像 + 登录入口 -->
    <div class="header">
      <van-image round width="60" height="60" fit="cover" src="/images/text05.png" class="avatar" />
      <div class="user-info">
        <div class="name">欢迎来到 Shoop</div>
        <router-link to="/login" class="login-link">点击登录 / 注册 ></router-link>
      </div>
    </div>

    <!-- 订单入口 -->
    <van-cell-group inset class="block">
      <van-cell title="我的订单" is-link value="全部订单" />
      <van-grid :column-num="4" :border="false">
        <van-grid-item icon="balance-list-o" text="待付款" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="comment-o" text="待评价" />
        <van-grid-item icon="after-sale" text="退款/售后" />
      </van-grid>
    </van-cell-group>

    <!-- 常用功能 -->
    <van-cell-group inset class="block">
      <van-cell title="收货地址" icon="location-o" is-link />
      <van-cell title="我的收藏" icon="star-o" is-link />
      <van-cell title="优惠券" icon="coupon-o" is-link />
      <van-cell title="联系客服" icon="service-o" is-link />
      <van-cell title="设置" icon="setting-o" is-link />
    </van-cell-group>
  </div>
</template>

<script setup>
// 我的页面目前只做静态展示
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: #f7f8fa;
}
.header {
  display: flex;
  align-items: center;
  padding: 30px 20px 40px;
  background: linear-gradient(to bottom, #ff5454, #ff8a8a);
}
.avatar {
  border: 2px solid #fff;
  background: #fff;
}
.user-info {
  margin-left: 14px;
  color: #fff;
}
.name {
  font-size: 18px;
  font-weight: bold;
}
.login-link {
  display: inline-block;
  margin-top: 6px;
  font-size: 13px;
  color: #fff;
}
.block {
  margin-top: 12px;
}
</style>
