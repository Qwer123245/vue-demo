<template>
  <div class="cart-page">
    <van-nav-bar title="购物车" fixed placeholder />

    <van-empty v-if="cartStore.cartList.length === 0" description="购物车还是空的,去首页逛逛吧">
      <van-button round type="danger" class="go-btn" @click="router.push('/home')">去逛逛</van-button>
    </van-empty>

    <template v-else>
      <div class="list">
        <div v-for="item in cartStore.cartList" :key="item.id" class="item">
          <van-checkbox v-model="item.selected" checked-color="#ff5454" />
          <van-card
            class="card"
            :price="item.price"
            :title="item.title"
            :thumb="item.image"
          >
            <template #num>
              <van-stepper v-model="item.count" min="1" max="99" integer />
            </template>
            <template #footer>
              <van-button size="mini" @click="cartStore.removeFromCart(item.id)">删除</van-button>
            </template>
          </van-card>
        </div>
      </div>

      <!-- 底部结算栏:放在底部导航上方 -->
      <van-submit-bar
        class="submit-bar"
        :price="Math.round(cartStore.totalPrice * 100)"
        button-text="去结算"
        @submit="onSubmit"
      />
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useCartStore } from '@/store/cart'

const router = useRouter()
const cartStore = useCartStore()

const onSubmit = () => {
  showToast('结算功能还在开发中')
}
</script>

<style scoped>
.cart-page {
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 60px;
}
.item {
  display: flex;
  align-items: center;
  background: #fff;
  padding-left: 12px;
  margin-bottom: 8px;
}
.card {
  flex: 1;
  background: #fff;
}
.go-btn {
  width: 160px;
}
/* 让结算栏停在底部导航(50px)上方 */
.submit-bar {
  bottom: 50px;
}
</style>
