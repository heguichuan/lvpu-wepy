const path = require('path')
// const pxt2units = require('postcss-px2units')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  static: ['static'],
  build: {
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src'),
      'vant': path.join(__dirname, 'src/components/vant'),
      'gc': path.join(__dirname, 'src/components/gc')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator'
      ]
    }
    // postcss: {
    //   plugins: [
    //     pxt2units({
    //       divisor: 1,
    //       multiple: 2,
    //       decimalPlaces: 3,
    //       comment: 'no',
    //       targetUnits: 'rpx'
    //     }),
    //   ],
    //   map: {
    //     inline: true
    //   },
    // },
  },
  plugins: [],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
