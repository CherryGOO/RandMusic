
const serverbaseUrl = 'https://api.qqsuu.cn'
// const px2remLoader = {
//   loader: 'px2rem-loader',
//   options: {
//     // 根据你的设计稿而定，remUnit = 设计稿 / 10;
//     /**
//      * 根据你的设计稿而定
//      * 比如750px的设计稿，remUnit = 750 / 10 = 75;
//      * 640的设计稿，remUnit = 640 / 10 = 64;
//      */
//     remUnit: 75
//   }
// }
module.exports = {
  devServer: { // 开发环境下，对于浏览器的esLint遮罩层的关闭
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/res': {
        target: serverbaseUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/res': ''
        }
      }
    }
  },
  lintOnSave: false, // 直接关闭eslint检查规则关闭了
  configureWebpack: config => {
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = process.env.NODE_ENV === 'production'
    // provide the app's title in webpack's name field, so that
    config.externals = {
      resolve: {
        alias: {
          assets: '@/assets',
          con: '@/components',
          views: '@/views'
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 35, // 新版本的是这个值
            mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 0 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      }
    }
  }
}
