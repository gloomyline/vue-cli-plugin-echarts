module.exports = pkg => ([
  {
    type: 'confirm',
    name: 'addModulesManually',
    message: 'Add echarts modules manually?',
    default: false
  },
  {
    type: 'checkbox',
    name: 'addedModules',
    when: answer => answer.addModulesManually,
    message: 'Select the echarts modules installed to reduce bundle size.',
    choices: [
      {
        name: 'bar',
        value: 'chart/bar',
        shortly: 'bar',
        checked: true
      },
      {
        name: 'line',
        value: 'chart/line',
        shortly: 'line',
        checked: true
      },
      {
        name: 'pie',
        value: 'chart/pie',
        shortly: 'pie',
        checked: true
      },
      {
        name: 'map',
        value: 'chart/map',
        shortly: 'map',
        checked: true
      },
      {
        name: 'lines',
        value: 'chart/lines',
        shortly: 'lines',
      },
      {
        name: 'grid',
        value: 'component/grid',
        shortly: 'grid',
        checked: true,
      },
      {
        name: 'tooltip',
        value: 'component/tooltip',
        shortly: 'tooltip',
        checked: true,
      },
      {
        name: 'singleAxis',
        value: 'component/singleAxis',
        shortly: 'singleAxis',
        checked: true,
      },
      {
        name: 'toolbox',
        value: 'component/toolbox',
        shortly: 'toolbox',
        checked: true,
      },
      {
        name: 'axisPointer',
        value: 'component/axisPointer',
        shortly: 'axisPointer',
        checked: true,
      },
      {
        name: 'title',
        value: 'component/title',
        shortly: 'title',
        checked: true,
      },
      {
        name: 'timeline',
        value: 'component/timeline',
        shortly: 'timeline',
        checked: true,
      },
      {
        name: 'markPoint',
        value: 'component/markPoint',
        shortly: 'markPoint',
        checked: true,
      },
      {
        name: 'markLine',
        value: 'component/markLine',
        shortly: 'markLine',
        checked: true,
      },
      {
        name: 'markArea',
        value: 'component/markArea',
        shortly: 'markArea',
        checked: true,
      },
      {
        name: 'legendScroll',
        value: 'component/legendScroll',
        shortly: 'markArea',
        checked: true,
      },
      {
        name: 'legend',
        value: 'component/legend',
        shortly: 'legend',
        checked: true,
      },
      {
        name: 'dataZoom',
        value: 'component/dataZoom',
        shortly: 'dataZoom',
      },
      {
        name: 'dataZoomInside',
        value: 'component/dataZoomInside',
        shortly: 'dataZoomInside',
      },
      {
        name: 'dataZoomSlider',
        value: 'component/dataZoomSlider',
        shortly: 'dataZoomSlider',
      },
      {
        name: 'visualMap',
        value: 'component/visualMap',
        shortly: 'visualMap',
      }
    ]
  },
  {
    type: 'confirm',
    name: 'addGL',
    message: 'Add echarts GL',
    default: false
  }
])
