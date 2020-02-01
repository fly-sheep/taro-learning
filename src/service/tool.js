import Taro from '@tarojs/taro'
import { ServerCode, ServerCodeMap, BASE_URL } from './config'

// 错误提示
const showError = (message, show = true) => {
  show &&
    Taro.showToast({
      title: message || '请求异常',
      icon: 'none'
    })

  return Promise.reject(message)
}

// 自定义拦截器
const customInterceptor = chain => {
  console.log(chain)
  const requestParams = chain.requestParams
  return chain
    .proceed(requestParams)
    .catch(res => {
      console.log(res)
      debugger
      // 这个catch需要放到前面才能捕获request本身的错误
      Taro.hideLoading() // 强制取消加载动画
      return showError(res.errMsg)
    })
    .then(res => {
      /**
       * 只要请求成功，不管返回什么状态码，都走这个回调
       * statusCode 浏览器状态码
       * data.code 接口返回状态码（前后端约定）
       */
      console.log(res)

      Taro.hideLoading() // 强制取消加载动画

      let { statusCode } = res,
        data = res.data || {},
        code = data.code ? data.code : statusCode

      //   return Promise.resolve(data.data || {})

      // 未登录
      if (code === ServerCode.NO_LOGIN) {
        Taro.navigateTo({
          url: '/pages/login/index'
        })
        return showError(data.msg || ServerCodeMap[code])
      }

      // 其他异常捕获(状态码非200、400)
      if (![ServerCode.SUCCESS, ServerCode.CONTINUE].includes(code)) {
        return showError(data.msg || ServerCodeMap[code])
      }

      return Promise.resolve(data.data || {})
    })
}

// 请求前基础配置
const baseOptions = (params, method = 'GET') => {
  let { url, data, showLoading } = params
  let contentType = 'application/json'
  contentType = params.contentType || contentType
  const option = {
    url: url.includes('http') || url.includes('https') ? url : BASE_URL + url,
    data: data,
    method: method,
    header: {
      'content-type': contentType
    }
  }

  // 加载动画
  showLoading &&
    Taro.showLoading({
      title: 'loading'
    })

  return Taro.request(option)
}

// 添加拦截器
Taro.addInterceptor(customInterceptor)

// 四种请求方式
export const get = params => baseOptions(params)
export const post = params => baseOptions(params, 'POST')
export const put = params => baseOptions(params, 'PUT')
export const del = params => baseOptions(params, 'DELETE')
