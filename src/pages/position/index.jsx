import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Position extends Component {
  config = {
    navigationBarTitleText: '热招职位'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="p-position">
        <Text>热招职位</Text>
      </View>
    )
  }
}
