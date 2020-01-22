import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Personal extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="p-personal">
        <Text>个人中心</Text>
      </View>
    )
  }
}
