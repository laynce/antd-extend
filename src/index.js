import * as components from './components'
import 'virtual:uno.css'
export * from './components'

// 全局注册 插件形式
export default {
  install(app) {
    Object.keys(components).forEach(key => {
      app.components(key, components[key])
    })
  }
}
