import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { CanvasDrawer } from 'taro-plugin-canvas' // npm 引入方式
import './index.less'

export default class Poster extends Component {
  config = {
    navigationBarTitleText: '热招职位'
  }

  constructor(props) {
    super(props)
    this.state = {
      config: null, // 绘图配置文件
      shareImage: null, // 图片地址
      visible: false, // 图片预览状态
      canvasStatus: false, // CanvasDrawer 组件状态
      rssConfig: {
        width: 750,
        height: 750,
        debug: false,
        texts: [
          {
            x: 40,
            y: 40,
            text:
              '这是图片上的文字这是图片上的文字这是图片上的文字这是图片上的文字这是图片上的312312312331231231233123123123312312312331231231233123123123312312312331231231233123123123',
            width: 670,
            fontSize: 32,
            color: '#fff',
            opacity: 1,
            lineNum: 999,
            textAlign: 'left',
            zIndex: 999
          }
        ],
        images: [
          {
            url: 'http://pic.juncao.cc/rssfeed/images/demo.png',
            width: 750,
            height: 2320,
            y: 0,
            x: 0,
            borderRadius: 12,
            zIndex: 10
          }
        ]
      }
    }
  }

  // 调用绘画 => canvasStatus 置为true、同时设置config
  canvasDrawFunc = (config = this.state.rssConfig) => {
    this.setState({
      canvasStatus: true,
      config: config
    })
    Taro.showLoading({
      title: '绘制中...'
    })
  }

  // 绘制成功回调函数 （必须实现）=> 接收绘制结果、重置 CanvasDrawer 状态
  onCreateSuccess = result => {
    const { tempFilePath, errMsg } = result
    Taro.hideLoading()
    if (errMsg === 'canvasToTempFilePath:ok') {
      this.setState({
        visible: true,
        shareImage: tempFilePath,
        // 重置 CanvasDrawer 状态，方便下一次调用
        canvasStatus: false,
        config: null
      })
    } else {
      // 重置 CanvasDrawer 状态，方便下一次调用
      this.setState({
        canvasStatus: false,
        config: null
      })
      Taro.showToast({ icon: 'none', title: errMsg || '出现错误' })
      console.log(errMsg)
    }
  }

  // 绘制失败回调函数 （必须实现）=> 接收绘制错误信息、重置 CanvasDrawer 状态
  onCreateFail = error => {
    Taro.hideLoading()
    // 重置 CanvasDrawer 状态，方便下一次调用
    this.setState({
      canvasStatus: false,
      config: null
    })
    console.log(error)
  }

  render() {
    const { visible, shareImage, canvasStatus, config } = this.state
    return (
      <View className="m-poster">
        <View onClick={this.canvasDrawFunc.bind(this, this.state.rssConfig)}>{this.props.children}</View>
        {visible && (
          <View className="shareImage-preview">
            <View className="mask" onClick={() => this.setState({ visible: false })}></View>
            <View className="wrap">
              <Image className="shareImage" src={shareImage} mode="widthFix" lazy-load />
            </View>
          </View>
        )}
        {// 由于部分限制，目前组件通过状态的方式来动态加载
        canvasStatus && (
          <CanvasDrawer
            config={config} // 绘制配置
            onCreateSuccess={this.onCreateSuccess} // 绘制成功回调
            onCreateFail={this.onCreateFail} // 绘制失败回调
          />
        )}
      </View>
    )
  }
}
