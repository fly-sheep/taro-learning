import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Poster from '@/components/poster'
import './index.less'

export default class Position extends Component {
  config = {
    navigationBarTitleText: '热招职位'
  }

  render() {
    return (
      <View className="p-position">
        <Poster>
          <Button>绘制1</Button>
        </Poster>
      </View>
    )
  }
}
