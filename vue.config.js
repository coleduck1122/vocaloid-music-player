const path = require('path')
const { defineConfig } = require('@vue/cli-service')

// const vue = require('@vitejs/plugin-vue');
// const VueSetupExtend = require('vite-plugin-vue-setup-extend');
// import electron from 'vite-plugin-electron';
// import electronRenderer from 'vite-plugin-electron/renderer';
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const polyfillExports = require('vite-plugin-electron/polyfill-exports')
// const AutoImport = require('unplugin-auto-import/vite')
// const Components = require('unplugin-vue-components/vite')
// const alias = require("@rollup/plugin-alias")

module.exports = defineConfig({
  devServer: {
    port: 3939,
  },
  // pluginOptions: {
  //   electronBuilder: {
  //     mainProcessFile: 'electron/index.ts',
  //     preload: {
  //       // Must be use absolute path, this is the limit of rollup
  //       entry: path.join(__dirname, 'electron/preload.ts'),
  //     },
  //   },
  // },
  css: {
    loaderOptions: {
      less: {
        // javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/base.less')}";`
      }
    },
  },
  // 配置别名
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  },
  configureWebpack: {
    plugins: [
      // VueSetupExtend(),
      // vue(),
      // electron({
      //   main: {
      //     entry: 'electron/index.ts',
      //   },
      //   preload: {
      //     // Must be use absolute path, this is the limit of rollup
      //     input: path.join(__dirname, 'electron/preload.ts'),
      //   },
      // }),
      // electronRenderer(),
      // polyfillExports(),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // alias()
    ],
  },
})
