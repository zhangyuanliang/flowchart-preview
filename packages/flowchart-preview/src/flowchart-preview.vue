<template>
  <div class="flow-chart-wrap">
    <div v-if="nodeConfig.type < 3" class="node-wrap">
      <div class="node-wrap-box" :class="nodeConfig.type == 0 ? 'start-node ' : ''" @click="nodeClick(nodeConfig)">
        <div>
          <div class="node-title" :style="`background: rgb(${bgColor});`">
            <span>{{ nodeConfig.nodeName }}</span>
          </div>
          <div class="content">
            <div class="text">
              <div class="remark-time">{{ nodeConfig.modelTime }}</div>
              <span class="remark">{{ nodeConfig.remark }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="gap-box">
        <div class="gap" />
      </div>
    </div>
    <div v-if="nodeConfig.type == 4" class="branch-wrap">
      <div class="branch-box-wrap">
        <div class="branch-box">
          <div v-for="(item,index) in nodeConfig.conditionNodes" :key="index" class="col-box">
            <div class="condition-node">
              <div class="condition-node-box">
                <div class="auto-judge">
                  <div class="title-wrapper">
                    <span class="node-title">{{ item.nodeName }}</span>
                  </div>
                </div>
                <div class="gap-box">
                  <div class="gap" />
                </div>
              </div>
            </div>
            <FlowChart v-if="item.childNode" :nodeConfig.sync="item.childNode" @nodeClick="nodeClick" />
            <template v-if="index == 0">
              <div class="top-left-line-cover" />
              <div class="top-right-line-cover" />
            </template>
            <template v-if="nodeConfig?.conditionNodes && index === nodeConfig.conditionNodes.length - 1">
              <div class="bottom-left-line-cover" />
              <div class="bottom-right-line-cover" />
            </template>
          </div>
        </div>
      </div>
    </div>
    <FlowChart v-if="nodeConfig.childNode" :nodeConfig.sync="nodeConfig.childNode" @nodeClick="nodeClick" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { NodeConfig } from './types.d'

defineOptions({
  name: 'FlowChart'
})

const props = defineProps({
  nodeConfig: {
    type: Object as () => NodeConfig,
    required: true
  }
})

const emit = defineEmits(['nodeClick'])

/* 定义一个名为 bgColor 的计算属性，用类型断言将其定义为一个字符串 */
const bgColor = computed(() => {
  const colorMap = {
    pending: '92, 114, 230',
    success: '46, 204, 113',
    error: '245, 108, 108'
  }
  return colorMap[props.nodeConfig.status as keyof typeof colorMap] || colorMap.pending
})

/* 定义一个名为 nodeClick 的方法 */
const nodeClick = (nodeConfig: NodeConfig) => {
  emit('nodeClick', nodeConfig)
}
</script>

<style lang="less">
.flow-chart-wrap {
  display: flex;
}

.node-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.node-wrap-box {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 144px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -13px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 0;
    height: 0;
    background: #fff;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 10px solid #e3e3e3;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -4px;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    margin: auto;
    width: 57px;
    height: 1px;
    background-color: #e3e3e3;
  }
}

.node-wrap-box.active,
.node-wrap-box:active,
.node-wrap-box:hover {
  border: 1px solid #3296fa;
  box-shadow: 0 0 6px 0 rgba(50, 150, 250, .3);
  transition: all .2s ease-in-out;
}

.node-wrap-box .node-title {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #fff;
  text-align: left;
  background: #576a95;
  border-radius: 4px 4px 0 0;
  span {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.node-wrap-box .content {
  position: relative;
  font-size: 12px;
  line-height: 14px;
  padding: 6px 8px 6px 10px;
  min-height: 26px;
}

.node-wrap-box .content .text {
  .remark-time {
    width: 100%;
    margin-bottom: 4px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #bfbfbf;
  }
  .remark {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.node-wrap-box .content .arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 14px;
  font-size: 14px;
  color: #979797
}

.node-wrap-box.start-node {
  &::before {
    content: none
  }
  &::after {
    content: none
  }
}

.top-left-line-cover,
.top-right-line-cover
 {
  position: absolute;
  height: 50%;
  width: 8px;
  background-color: #fff;
  left: -4px;
}

.top-left-line-cover,
.top-right-line-cover {
  top: -0.5px;
}

.top-right-line-cover {
  left: 100%;
}

.bottom-left-line-cover,
.bottom-right-line-cover {
  position: absolute;
  height: 50%;
  width: 8px;
  background-color: #fff;
  left: -4px
}

.bottom-left-line-cover,
.bottom-right-line-cover {
  bottom: -0.5px;
}

.bottom-right-line-cover {
  left: 100%;
}

.branch-box-wrap {
  width: 100%;
  min-height: 270px;
  margin-left: -4px;
  display: flex;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0px;
    bottom: 0;
    transform: translateX(-100%);
    z-index: 1;
    margin: auto;
    width: 57px;
    height: 1px;
    background-color: #e3e3e3;
  }
}

.branch-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: visible;
  width: 100%;
  border-left: 1px solid #e3e3e3;
  position: relative;
}

.branch-box .col-box {
  background: #fff;
}

.col-box {
  display: inline-flex;
  align-items: center;
  position: relative
}

.condition-node,
.condition-node-box {
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-flex: 1
}

.condition-node-box {
  padding-right: 0px;
  padding-left: 14px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-grow: 1;
  position: relative
}

.condition-node-box:before {
  content: "";
  position: absolute;
  top: 0;
  left: -4px;
  right: 0;
  bottom: 0;
  margin: auto;
  width: calc(100% - 4px);
  height: 1px;
  background-color: #e3e3e3;
}

.auto-judge {
  position: relative;
  min-width: 52px;
  background: #fff;
  padding: 10px;
}

.auto-judge:after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all .1s cubic-bezier(.645, .045, .355, 1);
}

.auto-judge .title-wrapper {
  position: relative;
  font-size: 12px;
  color: #5a2cc5;
  text-align: center;
  line-height: 1;
}

.auto-judge .title-wrapper .node-title {
  display: inline-block;
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}
.gap-box {
  width: 60px;
  display: inline-flex;

  .gap {
    user-select: none;
    width: 170px;
    height: 120px;
  }
}
</style>