import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Setup 写法的 Store:第一个参数 'cart' 是唯一标识
export const useCartStore = defineStore('cart', () => {
  // 【State】购物车商品列表
  const cartList = ref([])

  // 【Getter】购物车商品总数量
  const totalCount = computed(() =>
    cartList.value.reduce((sum, item) => sum + item.count, 0)
  )

  // 【Getter】已选中商品的总价
  const totalPrice = computed(() =>
    cartList.value
      .filter(item => item.selected)
      .reduce((sum, item) => sum + Number(item.price) * item.count, 0)
  )

  // 【Action】加入购物车:已存在则数量 +1,否则新增
  const addToCart = (product) => {
    const existingItem = cartList.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.count++
    } else {
      cartList.value.push({ ...product, count: 1, selected: true })
    }
  }

  // 【Action】从购物车删除
  const removeFromCart = (id) => {
    cartList.value = cartList.value.filter(item => item.id !== id)
  }

  return { cartList, totalCount, totalPrice, addToCart, removeFromCart }
})
