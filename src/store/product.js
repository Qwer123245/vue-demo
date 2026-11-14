import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  // 状态 (State): 存放数据
  state: () => ({
    // 首页展示的商品列表
    featuredProducts: [
      {
        id: 1,
        title: '宝格丽(BVLGARI)大吉岭茶淡香氛100ml木质调白衬衫男士香水生日礼物送男友618',
        price: '1199.8',
        image: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/437795/34/2380/28409/6a0ddf0aF4ca0d58e/0083320320c8e2d4.jpg!q70.dpg.webp',
        sales: 150
      },
      {
        id: 2,
        title: '力士(LUX)【柔顺留香】水润丝滑玻尿酸洗发水750g 干枯毛躁发质 柔顺留香',
        price: '39.9',
        image: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/445289/21/9972/105862/6a1f0a51F8756978b/0083320320ea9b39.jpg!q70.dpg.webp',
        sales: 999
      },
      {
        id: 3,
        title: '裕合联桌面小风扇静音办公室桌上夹式usb小型学生宿舍便携超长续航大风力迷你婴儿车载电风扇循环冷风 【充插两用-米白色】劲爽30h/广角摇头/100档',
        price: '89',
        image: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/414498/29/2031/53063/69cf5e12Feee62951/00833203208600e1.jpg!q70.dpg.webp',
        sales: 11
      },
      {
        id: 4,
        title: 'JCZS高速涡轮增压手持小风扇手持可携式折叠可挂颈办公室桌面风扇宿舍静音超长续航强力夏天降温神器 【象牙白】10m/s强劲风速体感降温18h超长续航 4000mAh',
        price: '56',
        image: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/440512/15/14446/161916/6a1d6114Fc00107f3/00833203207f8b84.jpg!q70.dpg.webp',
        sales: 11
      }
    ],

    // 当前选中的商品(点击商品进入详情页时保存)
    currentProduct: null
  }),

  actions: {
    setCurrentProduct(product) {
      this.currentProduct = product
    }
  }
})
