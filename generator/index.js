module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'echarts': '^4.1.0',
      'vue-echarts': '^5.0.0'
    }
  })

  if (options.addGL) {
    api.extendPackage({
      dependencies: {
        'echarts-gl': '^1.1.2'
      }
    })
  }

  api.render('./template', options)

  api.injectImports(api.entryFile, `import './plugins/vue-echarts'`)
}
