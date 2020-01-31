import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { get } from '@/service/tool'
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

  onClick = () => {
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

  onClick2 = () => {
    get({
      url: 'https://zhaopin.netease.com/api/ats/ruleGuide?postStatus=1&type=1'
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

  render() {
    return (
      <View className="p-home">
        <Swiper className="test-h" indicatorColor="#999" indicatorActiveColor="#333" vertical circular indicatorDots autoplay>
          <SwiperItem>
            <View className="demo-text-1">1</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">2</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">3</View>
          </SwiperItem>
        </Swiper>
        <Button onClick={this.onClick} className="f-success">
          按钮
        </Button>
        <AtButton type="primary" className="f-success" onClick={this.onClick2}>
          按钮文案
        </AtButton>
      </View>
    )
  }
}
