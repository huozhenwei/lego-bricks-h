declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * 这是一个定义文件， ts 不认识 .vue 文件， 防止在 ts 文件中导入.vue文件报错，并且能获取类型
 */