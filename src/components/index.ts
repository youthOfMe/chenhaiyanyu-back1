// 引入项目中的全部全局组件
import SvgIcon from './SvgIcon/Index.vue'

// 全局对象的对象类型
import type { allGlobalComponentType } from '@/type/index.d.ts'
// 引入element-plus提供的全部图标组件
import * as ElementPlustIconsVue from '@element-plus/icons-vue'
// 全局对象
const allGlobalComponent: allGlobalComponentType = {
  svgIcon: SvgIcon,
}

// 对外暴露插件对象
export default {
  // 插件对象这务必叫做install方法
  install(app: { component: (arg0: string, arg1: any) => void }) {
    // 注册项目的全部的全局组件
    Object.keys(allGlobalComponent).forEach((item) => {
      // 注册为全局组件
      app.component(item, allGlobalComponent[item])
    })
    // 将element-plus提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlustIconsVue)) {
      app.component(key, component)
    }
  },
}
