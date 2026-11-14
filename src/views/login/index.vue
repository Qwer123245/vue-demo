<template>
  <div class="login-page">
    <!-- 左箭头返回上一级 -->
    <van-nav-bar title="登录" left-arrow @click-left="goBack" />

    <div class="logo-box">
      <div class="logo">Shoop</div>
      <div class="slogan">欢迎回来,登录后购物更方便</div>
    </div>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div class="btn-wrap">
        <van-button round block type="danger" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()
const username = ref('')
const password = ref('')

// 返回上一级;如果是直接打开的登录页(没有历史记录),就回首页
const goBack = () => {
  if (window.history.state && window.history.state.back) {
    router.back()
  } else {
    router.replace('/home')
  }
}

// 提交登录(这里只做演示,不连后端)
const onSubmit = () => {
  showToast({ message: '登录成功', icon: 'success' })
  router.replace('/profile')
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #f7f8fa;
}
.logo-box {
  text-align: center;
  padding: 40px 0 30px;
}
.logo {
  font-size: 36px;
  font-weight: bold;
  color: #ff5454;
}
.slogan {
  margin-top: 8px;
  font-size: 13px;
  color: #999;
}
.btn-wrap {
  margin: 24px 16px 0;
}
</style>
