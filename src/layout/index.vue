<template>
  <div class="layout-container">
    <!-- 1. 页面主体:v-slot="{ Component }" 让 transition 能捕获组件的销毁与重建 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <!-- :key 用路由路径,切换页面时强制重建组件,保证过渡动画正常 -->
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>

    <!-- 2. 底部导航栏:route 开启路由模式,to 指定跳转路径 -->
    <van-tabbar v-model="active" route placeholder>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o" :badge="cartStore.totalCount || ''">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore()
const active = ref(0) // route 模式下会根据当前路由自动高亮
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  background-color: #f7f8fa;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
