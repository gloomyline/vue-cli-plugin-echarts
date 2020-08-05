module.exports = (api, projectOptions) => {
  api.configureWebpack({
    transpileDependencies: [
      'vue-echarts',
      'resize-detector'
    ]
  })
}