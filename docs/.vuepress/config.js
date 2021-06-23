module.exports = {
  title: '个人博客', //左上角头部导航条的标题
  base:'/myBlog/',//gitHub仓库基础路径
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  description: 'Just playing around', //标题下的描述
  head: [ //添加浏览器icon图标
    ['link', { rel: 'icon', href: '/hello.jpg' }]
  ],
  plugins: ['@vuepress/back-to-top'],//back-to-top回到顶部
  themeConfig: { //主题配置
    nav: [ //头部导航条
      { text: '首页', link: '/' },
      { text: '基础教程', link: '/vue/' },
      { text: '前端笔记', link: '/foo/' },
      { text: '后端笔记', link: '/google/' },
      { text: 'github', link: 'https://github.com/zhengmaoshun/myBlog' },
      // { //下拉列表
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // },
      // {//下拉分组
      //   text: 'Languages',
      //   items: [
      //     { 
      //       text: 'Group1', 
      //       items: [
      //         { text: 'html', link: '/language/chinese/' },
      //         { text: 'css', link: '/language/chinese/' },
      //       ] 
      //     },
      //     { 
      //       text: 'Group2', 
      //       items: [
      //         { text: 'vue', link: '/language/chinese/' },
      //         { text: 'react', link: '/language/chinese/' },
      //       ] }
      //   ]
      // }
    ],
    sidebar:{ //配置侧边栏
      '/foo/':[
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],
    }
  },
  //最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
}