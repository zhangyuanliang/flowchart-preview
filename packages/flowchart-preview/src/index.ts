
import type { App, Plugin } from 'vue'
import FlowchartPreview from './flowchart-preview.vue'
export * from './types.d'

export interface PluginOptions {
  name?: string
}

export default {
  install(app: App, options?: PluginOptions) {
    const name = options?.name ?? 'FlowchartPreview'
    app.component(name, FlowchartPreview)
  },
} as Plugin

export { FlowchartPreview }