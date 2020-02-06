import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Poster1 from '@/components/poster1' // 将来废弃
import Poster from '@/components/poster'
import './index.less'

// 动态数据
const desc =
  '1.带领云信技术团队，负责云信IM和音视频等各产品线的研发工作↵2.负责规划云信各产品线的技术架构和技术演进方向，保证云信技术上的持续迭代和领先↵3.建设卓越高效的技术团队'
const requst =
  '1.计算机相关专业，本科及以上学历，8年以上研发经验，1年以上管理经验↵2.精通音视频技术栈，精通VoIP相关技术规范和标准↵3.对于音视频编解码、网络传输、弱网优化、高并发流媒体分发等都要有所了解↵4.熟悉WebRTC，了解业界各种新技术↵5.有良好的的沟通能力，有产品思维和业务思维'
const data = {
  desc,
  requst
}
export default class Position extends Component {
  config = {
    navigationBarTitleText: '热招职位'
  }

  render() {
    return (
      <View className="p-position">
        <Poster1>
          <Button>taro-plugin-canvas插件绘图</Button>
        </Poster1>

        <Poster data={data}>
          <Button>painter插件绘图</Button>
        </Poster>
      </View>
    )
  }
}
