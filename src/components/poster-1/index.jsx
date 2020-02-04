import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class Poster extends Component {
  onClick = () => {
    console.log(this.refs.test)
    console.log(Taro.createSelectorQuery().select('.aaa'))
  }

  render() {
    return (
      <View>
        <View ref="test" className="aaa">
          31232131231232
        </View>
        <Button onClick={this.onClick}>点击绘图</Button>
      </View>
    )
  }
}
