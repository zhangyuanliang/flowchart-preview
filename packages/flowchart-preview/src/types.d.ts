
export interface AnyObject {
  [key: string]: unknown
}

export interface ConditionNode {
  type: number
  nodeName: string
  modelTime: string
  remark: string
  childNode: NodeConfig
}

export interface NodeConfig {
  nodeName: string
  type: number
  status?: string
  remark?: string
  modelTime?: string
  childNode?: NodeConfig
  conditionNodes?: ConditionNode[]
}

export interface FlowchartPreviewProps {
  nodeConfig: NodeConfig
}