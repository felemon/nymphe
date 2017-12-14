module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '风行网',
    meta: [
      { name: 'keywords', content: '免费电影,电影下载,在线视频,在线电影' },
      { hid: 'description', name: 'description', content: '新一代视频风行网,提供免费电影、电视剧、综艺、动漫、体育等视频内容的在线观看和下载.累积7亿用户的全平台,为传媒机构和品牌客户开设了官方视频服务账号,通过大数据分析与个性推荐订阅技术,实现海量独家内容与用户个性需求即时匹配.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/css/main.less', lang: 'less' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
