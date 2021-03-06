/**
 * 长图
 * 由于画布宽度、高度需要在绘图开始前设定好，其高度是动态变化的
 * 我们可以先加载好长图的结构，获取其高度然后再给画布赋值
 */
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import largePosterBg1 from '@/assets/img/largePosterBg1.png'
import largePosterBg2 from '@/assets/img/largePosterBg2.png'
import './picture.less'

export default function LongPicture({ data = {} }) {
  return (
    <View className="m-long-picture">
      <Image src={largePosterBg1} className="header-img"></Image>
      <View className="title-desc">岗位描述</View>
      <View className="content">
        <Text>{(data.desc || '').replace(/↵/g, '\n')}</Text>
      </View>
      <View className="title-requst">岗位要求</View>
      <View className="content">
        <Text>{(data.requst || '').replace(/↵/g, '\n')}</Text>
      </View>
      <Image src={largePosterBg2} className="footer-img"></Image>
    </View>
  )
}

// LongPicture.options = {
//   addGlobalClass: true
// }

// LongPicture.externalClasses = ['picture-class']
