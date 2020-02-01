import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Personal extends Component {
  config = {
    navigationBarTitleText: '登录页'
  }

  componentWillMount() {
    console.log(Taro)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="p-login">
        <Text>登录页</Text>
      </View>
    )
  }
}
