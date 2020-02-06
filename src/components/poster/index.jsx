import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import largePosterBg1 from '@/assets/img/largePosterBg1.png'
import largePosterBg2 from '@/assets/img/largePosterBg2.png'
import LongPicture from './LongPicture' // 长图dom结构

import './index.less'

export default class Painter extends Component {
  config = {
    usingComponents: {
      painter: '../painter/painter'
    }
  }

  static defaultProps = {
    data: {}
  }

  constructor(props) {
    super(props)
    this.state = {
      config: null, // 画布配置信息
      visible: false, // 图片展示
      path: null // 画好的图片
    }
  }

  // 开始绘图
  generatePoster = () => {
    const { path } = this.state

    // 已经绘制过
    if (path) {
      this.setState({ visible: true })
      return
    }

    Taro.showLoading({
      title: '绘制中...'
    })

    // 注意：获取canvas高度之后才能开始绘图
    let query = Taro.createSelectorQuery()
    query
      .in(this.$scope)
      .select('.long-picture') // TODO 这里后面会是变量
      .boundingClientRect(rect => {
        const { data } = this.props // 父组件传递的信息
        const config = {
          background: '#fff',
          width: '750rpx',
          height: rect.height * 2 + 'rpx', // 计算得到的是px,需要转成rpx
          views: [
            {
              id: 'header-img',
              type: 'image',
              url: largePosterBg1,
              css: {
                width: '750rpx',
                height: '570rpx'
              }
            },
            {
              id: 'title-desc',
              type: 'text',
              text: `岗位描述`,
              css: {
                top: ['30rpx', 'header-img'],
                left: '80rpx',
                fontSize: '38rpx',
                fontWright: 'bold',
                color: '#000'
              }
            },
            {
              id: 'desc-text',
              type: 'text',
              text: data.desc,
              css: {
                top: ['30rpx', 'title-desc'],
                left: '80rpx',
                width: '590rpx',
                fontSize: '28rpx',
                lineHeight: '42rpx',
                color: '#000'
              }
            },
            {
              id: 'title-requst',
              type: 'text',
              text: `岗位要求`,
              css: {
                top: ['60rpx', 'desc-text'],
                left: '80rpx',
                fontSize: '38rpx',
                fontWright: 'bold',
                color: '#000'
              }
            },
            {
              id: 'requst-text',
              type: 'text',
              text: data.requst,
              css: {
                top: ['30rpx', 'title-requst'],
                left: '80rpx',
                width: '590rpx',
                fontSize: '28rpx',
                lineHeight: '42rpx',
                color: '#000'
              }
            },
            {
              type: 'image',
              url: largePosterBg2,
              css: {
                width: '750rpx',
                top: ['30rpx', 'requst-text']
              }
            }
          ]
        }
        this.setState({ config })
      })
      .exec()
  }

  onImgOK = e => {
    console.log('onImgOK', e.detail.path)
    Taro.hideLoading()
    this.setState({ path: e.detail.path, visible: true })
  }

  onImgErr = e => {
    console.log('onImgErr', e)
    Taro.hideLoading()
  }

  render() {
    const { data } = this.props
    const { config, visible, path } = this.state
    return (
      <View className="m-poster">
        <View onClick={this.generatePoster}>{this.props.children}</View>
        {visible && <Image className="shareImage" src={path} mode="widthFix" lazy-load onClick={() => this.setState({ visible: false })} />}

        {/* 长图不展示在页面，获取其整块dom的高度赋值给画布*/}
        <View className="long-picture">
          <LongPicture data={data} picture-class="m-long-picture"></LongPicture>
        </View>

        {/* 画布不展示在页面中 */}
        {config && <painter customStyle="position: absolute; left: -9999rpx;" palette={config} onImgOK={this.onImgOK} onImgErr={this.onImgErr} />}
      </View>
    )
  }
}
