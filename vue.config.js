const fs = require("fs");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Cider/' : '/',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    https: true
  },
  pluginOptions: {
    dll: {
      entry: ['vue', 'vuetify', 'vuex', 'vue-axios', 'axios'],
    },
  },
}
