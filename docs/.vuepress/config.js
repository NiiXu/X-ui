const path = require('path')
module.exports = {
  base: '/x-ui/',
  title: '轱辘UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/radio',
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/toast',
          '/components/popover',
          '/components/layout',
          '/components/grid',
          '/components/slides',

        ]
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
