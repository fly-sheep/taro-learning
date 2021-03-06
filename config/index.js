const path = require('path')

const config = {
  projectName: 'taro-learning-pro',
  date: '2020-1-8',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  babel: {
    sourceMap: true,
    presets: [
      [
        'env',
        {
          modules: false
        }
      ]
    ],
    plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
  },
  plugins: [],
  defineConstants: {},
  // 小程序端专用配置
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          // autoprefixer 配置项
        }
      },
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
    // TODO 自动引入全局样式
    // webpackChain(chain) {
    //   console.log(path.resolve(__dirname, '..', 'src/assets/css/variables.less'))
    //   chain.merge({
    //     module: {
    //       rule: {
    //         myloader: {
    //           test: /\.less$/,
    //           use: [
    //             {
    //               loader: 'less-loader',
    //               options: {
    //                 sourceMap: false,
    //                 javascriptEnabled: true
    //               }
    //             },
    //             {
    //               loader: 'style-resources-loader',
    //               options: {
    //                 patterns: [
    //                   path.resolve(__dirname, '..', 'src/assets/css/variables.less'),
    //                   path.resolve(__dirname, '..', 'src/assets/css/function.less')
    //                 ],
    //                 injector: 'append'
    //               }
    //             }
    //           ],
    //           sideEffects: true
    //         }
    //       }
    //     }
    //   })
    // }
  },
  // H5 端专用配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
