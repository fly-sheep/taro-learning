import Taro from '@tarojs/taro'

/**
 * 函数防抖 (只执行最后一次点击)
 */
export const debounce = (fn, t) => {
  let delay = t || 500
  let timer
  return function() {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}

// 获取当前页面url
export const getCurrentPageUrl = () => Taro._$router.path
