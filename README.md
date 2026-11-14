# Shoop 商城项目

Vite + Vue3 + Vant4 + Pinia + Vue Router 的移动端商城(对应课堂文档《shoop首页完整文档》)。

## 运行

```bash
npm install
npm run dev
```

浏览器打开终端里显示的地址(一般是 http://localhost:5173),按 F12 切换到手机模式查看效果。

## 换成老师提供的图片素材

老师的素材在:`C:\Users\69544\OneDrive\Desktop\My_File\04_学习资料\Web前端作业\商城原型图`

目前项目里的图标和轮播图是我生成的占位图,用来保证项目能直接跑起来。把老师的图片复制进来覆盖即可:

| 用途 | 放到哪里 | 文件名 |
|---|---|---|
| 金刚区图标(icon 文件夹里的图片) | `public/images/` | `text01.png` ~ `text07.png`(与 home.vue 里 icons 数组对应;文件名不同就改数组里的路径) |
| 首页轮播图 | `src/assets/` | `banner01.png`、`banner02.png` |

## 目录结构

```
src/
├─ main.js            入口:挂载 Pinia / Router / Vant / rem 适配
├─ router/index.js    路由(登录、商品详情、带底部导航的 4 个主页面)
├─ layout/index.vue   底部导航 + 页面切换动画
├─ store/
│  ├─ product.js      商品数据仓库
│  └─ cart.js         购物车仓库(加购、总数、总价、删除)
└─ views/
   ├─ home.vue            首页:顶部导航、金刚区、轮播图、秒杀、商品卡片
   ├─ productDetails.vue  商品详情:图片/价格/标题 + 底部操作栏
   ├─ login/index.vue     登录页(可返回上一级)
   ├─ category.vue        分类页
   ├─ cart.vue            购物车页
   └─ profile.vue         我的页面
```
