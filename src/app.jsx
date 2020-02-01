import Taro, { Component } from '@tarojs/taro'
import Index from '@/pages/index'
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
// import '@/assets/css/index.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: ['pages/index/index', 'pages/position/index', 'pages/personal/index', 'pages/login/index'],
    window: {
      backgroundTextStyle: 'light', // 下拉 loading 的样式，仅支持 dark / light
      navigationBarBackgroundColor: '#c22b2b', // 导航栏背景颜色
      // navigationBarTitleText: 'WeChat', // 导航栏标题文字内容
      navigationBarTextStyle: 'black' // 导航栏标题颜色，仅支持 black / white
    },
    tabBar: {
      selectedColor: '#c22b2b',
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/index'
        },
        {
          text: '热招职位',
          pagePath: 'pages/position/index'
        },
        {
          text: '个人中心',
          pagePath: 'pages/personal/index'
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
