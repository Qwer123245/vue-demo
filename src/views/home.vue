<template>
  <div class="home-page">
    <!-- 顶部导航 start -->
    <van-nav-bar class="com-nav" fixed placeholder :border="false">
      <template #left>
        <div class="nav-left">
          <van-icon name="bars" color="#fff" size="20" />
        </div>
      </template>
      <template #title>
        <div class="search-wrapper">
          <van-search class="my-search" v-model="value" shape="round" placeholder="请输入搜索关键词" />
        </div>
      </template>
      <template #right>
        <router-link to="/login" class="nav-login">登录</router-link>
      </template>
    </van-nav-bar>
    <!-- 顶部导航 end -->

    <!-- 金刚区:每页 4 个图标,横向滑动 start -->
    <div class="main-content">
      <van-swipe :loop="false" :show-indicators="true" :touchable="true" indicator-color="#ff5454">
        <van-swipe-item v-for="(group, index) in iconGroups" :key="index">
          <van-grid :column-num="4" :border="false">
            <van-grid-item
              v-for="(icon, i) in group"
              :key="i"
              :icon="icon.icon"
              :text="icon.text"
              @click="handleonClick(icon)"
            />
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 金刚区 end -->

    <!-- 轮播图 start -->
    <div class="scckll-banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../assets/banner01.png" alt="banner1" /></van-swipe-item>
        <van-swipe-item><img src="../assets/banner02.png" alt="banner2" /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图 end -->

    <!-- 秒杀模块 start -->
    <div class="seckill-module">
      <div class="seckill-header">
        <div class="header-left">
          <van-icon name="fire-o" class="flash-icon" />
          <span class="title-text">限时秒杀</span>
          <van-count-down :time="3600000" format="mm:ss" class="countdown" />
        </div>
        <div class="header-right">更多 <van-icon name="arrow" size="12" /></div>
      </div>

      <div class="seckill-scroll">
        <van-swipe class="seckill-swiper" :width="110" :show-indicators="false" :loop="false">
          <van-swipe-item v-for="product in products" :key="product.id" class="product-card">
            <div class="img-wrapper">
              <img :src="product.image" class="item-img" referrerpolicy="no-referrer" />
            </div>
            <div class="price-box">
              <span class="symbol">¥</span>
              <span class="amount">{{ product.price }}</span>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 秒杀模块 end -->

    <!-- 商品卡片 start -->
    <div class="product-section">
      <van-row gutter="10" class="main-row">
        <van-col span="12" v-for="product in displayProducts" :key="product.id">
          <div class="card" @click="handleClick(product)">
            <div class="img-box">
              <img :src="product.image" :alt="product.title" referrerpolicy="no-referrer" />
            </div>
            <div class="desc">{{ product.title }}</div>
            <div class="price-row">
              <span class="price">¥{{ product.price }}</span>
              <span class="sales">{{ product.sales }}条评论</span>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <!-- 商品卡片 end -->
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/store/product'

const router = useRouter()
const productStore = useProductStore()
const value = ref('')

// ---------- 金刚区数据 ----------
// 图片放在 public/images 下,用 / 开头的绝对路径引用
const icons = [
  { text: '数码3C', icon: '/images/text01.png' },
  { text: '超市百货', icon: '/images/text02.png' },
  { text: '服装大全', icon: '/images/text03.png' },
  { text: '充值中心', icon: '/images/text04.png' },
  { text: 'VIP会员', icon: '/images/text05.png' },
  { text: '生鲜超市', icon: '/images/text06.png' },
  { text: '生鲜', icon: '/images/text06.png' },
  { text: '全部', icon: '/images/text07.png' }
]

// 计算属性:把一维数组按每 4 个一组切分,每组对应一页
const iconGroups = computed(() => {
  const groups = []
  for (let i = 0; i < icons.length; i += 4) {
    groups.push(icons.slice(i, i + 4))
  }
  return groups
})

// 点击图标;点击"全部"跳转到分类页
const handleonClick = (icon) => {
  console.log('点击了', icon.text)
  if (icon.text === '全部') {
    router.push('/category')
  }
}

// ---------- 秒杀商品数据 ----------
const products = [
  { id: 1, price: '29.9', image: 'https://m.360buyimg.com/seckillcms/jfs/t1/434444/23/676/190174/69fea098F365bbf58/0083320320a58e8f.jpg' },
  { id: 2, price: '71', image: 'https://m.360buyimg.com/seckillcms/jfs/t1/405251/24/5644/77063/69b96f80F28ea6457/0083320320bfb69e.jpg' },
  { id: 3, price: '59.8', image: 'https://m.360buyimg.com/seckillcms/jfs/t1/446871/10/804/163610/6a1d2031Fb1cc9638/00833203209f9a3e.jpg' },
  { id: 4, price: '69.9', image: 'https://m.360buyimg.com/seckillcms/jfs/t1/442272/35/7883/127171/6a194906F3fe7d83b/0083320320ed02bf.jpg' },
  { id: 5, price: '69.9', image: 'https://m.360buyimg.com/seckillcms/jfs/t1/442272/35/7883/127171/6a194906F3fe7d83b/0083320320ed02bf.jpg' },
  { id: 6, price: '69.9', image: 'https://m.360buyimg.com/seckillcms/jfs/t1/442272/35/7883/127171/6a194906F3fe7d83b/0083320320ed02bf.jpg' }
]

// ---------- 商品卡片 ----------
// 从 Pinia 仓库中获取商品列表
const displayProducts = ref(productStore.featuredProducts)

// 点击卡片:先把商品存进仓库,再跳到详情页
const handleClick = (product) => {
  productStore.setCurrentProduct(product)
  router.push({ name: 'productDetails', params: { id: product.id } })
}
</script>

<style scoped>
.home-page {
  background-color: #f7f8fa;
  padding-bottom: 10px;
}

/* ===== 顶部导航 ===== */
.com-nav {
  --van-nav-bar-background: #ff5454;
}
.com-nav :deep(.van-nav-bar__content) {
  background-color: #ff5454;
}
.com-nav :deep(.van-nav-bar__title) {
  max-width: 62%;
}
.my-search {
  border-radius: 30px;
  background-color: #f7f8fa;
}
.search-wrapper:deep(.van-search) {
  padding: 1px 10px;
}
.nav-login {
  color: white;
  font-weight: bold;
}

/* ===== 金刚区 ===== */
.main-content {
  padding: 10px 10px 0;
  background: linear-gradient(to bottom, #ff5454 0%, #ffffff 100%);
}
.main-content :deep(.van-swipe) {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}
.main-content :deep(.van-grid-item__icon) {
  font-size: 32px;
}
.main-content :deep(.van-grid-item__icon .van-icon__image) {
  width: 36px;
  height: 36px;
}
.main-content :deep(.van-swipe__indicators) {
  bottom: 4px;
}

/* ===== 轮播图 ===== */
.scckll-banner {
  margin: 10px;
  overflow: hidden;
  border-radius: 12px;
}
.scckll-banner img {
  display: block;
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
}

/* ===== 秒杀模块 ===== */
.seckill-module {
  margin: 12px 10px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.seckill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
}
.header-left {
  display: flex;
  align-items: center;
}
.flash-icon {
  color: #ff5454;
  font-size: 18px;
  margin-right: 6px;
}
.title-text {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-right: 8px;
}
.countdown {
  font-size: 13px;
  color: #ff5454;
}
.header-right {
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
}
.seckill-scroll {
  padding: 0 0 15px 10px;
}
.seckill-swiper {
  height: 150px;
}
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
}
.img-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-color: #f7f8fa;
  overflow: hidden;
  margin-bottom: 8px;
}
.item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.price-box {
  color: #ff5454;
  font-weight: bold;
}
.symbol {
  font-size: 12px;
  margin-right: 1px;
}
.amount {
  font-size: 16px;
}

/* ===== 商品卡片 ===== */
.product-section {
  padding: 10px;
  background-color: #fff;
  margin: 0 10px;
  border-radius: 12px;
}
.main-row {
  row-gap: 10px;
}
.card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.img-box img {
  width: 100%;
  height: auto;
  display: block;
}
.desc {
  font-size: 13px;
  margin: 6px 8px;
  line-height: 1.4;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 8px 8px;
  font-size: 12px;
  color: #999;
}
.price {
  color: #ff5454;
  font-weight: bold;
  font-size: 18px;
}
</style>
