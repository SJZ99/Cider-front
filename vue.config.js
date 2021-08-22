const fs = require("fs");
module.exports = {
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
