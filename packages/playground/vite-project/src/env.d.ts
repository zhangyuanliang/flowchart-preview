/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_PROJECT_NAME: string
  readonly VITE_BASE_API: string
  readonly VITE_TOKEN_KEY: string
  readonly VITE_REFRESH_TOKEN_KEY: string
  readonly VITE_OPEN_MOCK: string
}

declare module 'flowchart-preview' {
  // 声明你的类型，或者如果不确定类型，可以使用 any 作为占位符
  export const FlowchartPreview: any;
}