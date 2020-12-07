import Comp from './index.vue'

export default {
  install(Vue, options) {
    Vue.component('{{{name}}}', Comp)
  }
}