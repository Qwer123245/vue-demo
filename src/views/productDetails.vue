<template>
  <div class="detail-page">
    <!-- 顶部导航:点左箭头返回上一级 -->
    <van-nav-bar title="商品详情" left-arrow fixed placeholder @click-left="router.back()" />

    <div v-if="currentProduct" class="content">
      <!-- 商品图片 -->
      <img :src="currentProduct.image" class="goods-img" referrerpolicy="no-referrer" />

      <!-- 商品信息:价格、标题、销量 -->
      <div class="info-box">
        <div class="price">￥{{ currentProduct.price }}</div>
        <h1 class="title">{{ currentProduct.title }}</h1>
        <div class="sales">{{ currentProduct.sales }}条评论</div>
      </div>
    </div>
    <van-empty v-else description="没有找到这个商品" />

    <!-- 底部固定操作栏 -->
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        :badge="cartStore.totalCount || ''"
        @click="router.push('/cart')"
      />
      <van-action-bar-button type="warning" text="加入购物车" @click="handleAddToCart" />
      <van-action-bar-button type="danger" text="立即购买" @click="handleBuyNow" />
    </van-action-bar>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useCartStore } from '@/store/cart'
import { useProductStore } from '@/store/product'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const productStore = useProductStore()

const currentProduct = ref(null)

onMounted(() => {
  // 从路由参数里拿到商品 id
  const id = Number(route.params.id)
  // 优先用点击时存进仓库的商品;刷新页面后仓库被清空,就按 id 去商品列表里找
  if (productStore.currentProduct?.id === id) {
    currentProduct.value = productStore.currentProduct
  } else {
    currentProduct.value = productStore.featuredProducts.find(p => p.id === id) || null
  }
})

// 加入购物车
const handleAddToCart = () => {
  if (!currentProduct.value) return
  cartStore.addToCart(currentProduct.value)
  showToast({ message: '已成功加入购物车', icon: 'success', position: 'top' })
}

// 立即购买(先只做提示,后续再接结算页)
const handleBuyNow = () => {
  showToast('正在结算,稍等哈···')
}
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 60px;
}
.goods-img {
  display: block;
  width: 100%;
}
.info-box {
  background: #fff;
  padding: 12px 15px 15px;
}
.price {
  color: #ff5454;
  font-size: 24px;
  font-weight: bold;
}
.title {
  margin: 8px 0 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sales {
  margin-top: 8px;
  font-size: 12px;
  color: #999;
}
</style>
