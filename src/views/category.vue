<template>
  <div class="category-page">
    <van-nav-bar title="商品分类" fixed placeholder :border="false" />
    <div class="body">
      <!-- 左侧分类栏 -->
      <van-sidebar v-model="activeIndex" class="sidebar">
        <van-sidebar-item v-for="c in categories" :key="c.name" :title="c.name" />
      </van-sidebar>

      <!-- 右侧:当前分类下的子分类 -->
      <div class="right">
        <div class="right-title">{{ categories[activeIndex].name }}</div>
        <van-grid :column-num="3" :border="false">
          <van-grid-item
            v-for="item in categories[activeIndex].items"
            :key="item"
            icon="photo-o"
            :text="item"
          />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const categories = [
  { name: '数码3C', items: ['手机', '电脑', '耳机', '相机', '平板', '智能手表'] },
  { name: '超市百货', items: ['零食', '饮料', '粮油', '纸品', '清洁用品', '收纳'] },
  { name: '服装大全', items: ['男装', '女装', '童装', '运动', '鞋靴', '配饰'] },
  { name: '充值中心', items: ['话费充值', '流量充值', '游戏点卡', '水电煤'] },
  { name: 'VIP会员', items: ['视频会员', '音乐会员', '购物会员'] },
  { name: '生鲜超市', items: ['水果', '蔬菜', '肉禽蛋', '海鲜水产', '乳品烘焙'] }
]
</script>

<style scoped>
.category-page {
  min-height: 100vh;
  background: #fff;
}
.body {
  display: flex;
  min-height: calc(100vh - 46px - 50px);
}
.sidebar {
  width: 90px;
  flex: none;
}
.right {
  flex: 1;
  padding: 12px;
}
.right-title {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 8px;
}
</style>
