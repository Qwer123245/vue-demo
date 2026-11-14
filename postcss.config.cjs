// px 自动转 rem(Vant 官方推荐配置)
// 注意:不要忽略 node_modules,否则 Vant 样式不会被转换
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
