import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#103B7F',
    success: '#0DA27A',
    info: '	#029DC6',
    error: '	#BA2F44',
  }
})
