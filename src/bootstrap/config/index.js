import config from './defaultConfig'
import Vue from 'vue'

Vue.use({
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$nya",{
      get: () => config
    })
  }
})
