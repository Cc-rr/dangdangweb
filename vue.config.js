module.exports = {
  devServer: {
    proxy: {
      '/migu': { // 前缀自己写
        target: 'https://api.asilu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/migu': ''
        }
      },
      '/api': { // 前缀自己写
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }

  }
}
