import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { get } from '@/service/tool'
import { loginIn } from '@/service'
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
    console.log(Taro)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 普通请求方式
  onClick1 = () => {
    Taro.request({
      url: 'https://zhaopin.netease.com/api/ats/ruleGuide?postStatus=1&type=1',
      success: () => {
        debugger
        Taro.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: () => {
        debugger
        Taro.showToast({
          title: '失败',
          duration: 2000
        })
      }
    })
  }

  // 第一次进化
  onClick2 = () => {
    get({
      showLoading: true,
      url: 'https://zhaopin.netease.com/api/ats/ruleGuide?postStatus=1&type=1',
      data: { id: 1 }
    })
      .then(res => {
        console.log(res, 'then')
      })
      .catch(res => {
        console.log(res, 'catch')
      })
      .finally(res => {
        console.log(res, 'finally')
      })
  }

  // 第二次进化
  onClick3 = () => {
    loginIn({
      data: { id: 1 }
    }).then(res => {
      console.log(res, 'then')
    })
  }

  render() {
    return (
      <View className="p-home">
        <View style={{ height: 100 }}>占位符</View>
        <AtButton type="primary" onClick={this.onClick1} className="f-success">
          原生方式请求
        </AtButton>
        <AtButton type="primary" className="f-success" onClick={this.onClick2}>
          封装方法请求1
        </AtButton>
        <AtButton type="primary" className="f-success" onClick={this.onClick3}>
          封装方法请求2
        </AtButton>
      </View>
    )
  }
}
