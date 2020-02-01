module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      host: '0.0.0.0',
      port: 10086,
      proxy: {
        '/mock/dev': {
          target: 'http://10.171.160.65:8800',
          secure: false,
          pathRewrite: {
            '^/mock/dev': ''
          },
          changeOrigin: true
        },
        '/mock/test': {
          target: 'http://10.171.160.132:8800',
          secure: false,
          pathRewrite: {
            '^/mock/test': ''
          },
          changeOrigin: true
        },
        '/mock': {
          target: 'http://127.0.0.1:3000',
          secure: false,
          pathRewrite: {
            '^/mock': ''
          },
          changeOrigin: true
        }
      }
    }
  }
}
