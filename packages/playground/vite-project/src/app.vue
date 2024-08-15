<template>
  <div class="page-container">
    <div class="container">
      <div class="progress-wrap">
        <div class="zoom">
          <div :class="`zoom-down ${zoomValue == 50 ? 'disabled' : ''}`" @click="zoomChange('down')" />
          <span>{{ zoomValue }}%</span>
          <div :class="`zoom-up ${zoomValue == 300 ? 'disabled' : ''}`" @click="zoomChange('up')" />
          <span class="reset-cls" @click="zoomReset">重置</span>
        </div>
        <div ref="boxScaleRef" class="scale-wrap" :style="`transform: scale(${zoomValue / 100}); transform-origin: 0px 0px;`">
          <FlowchartPreview :nodeConfig="nodeData" @nodeClick="nodeClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FlowchartPreview } from 'flowchart-preview'
import type { NodeConfig } from 'flowchart-preview/dist/index.d'
import { nodeData } from './data'
import { ref } from 'vue'

const zoomValue = ref(100)

const boxScaleRef = ref<HTMLElement>()
const zoomChange = (type: string) => {
  boxScaleRef.value && (boxScaleRef.value.style.willChange = 'transform')
  if (type == 'down') {
    if (zoomValue.value == 50) return
    zoomValue.value -= 10
  } else {
    if (zoomValue.value == 150) return
    zoomValue.value += 10
  }
  boxScaleRef.value && (boxScaleRef.value.style.willChange = 'auto')
}
const zoomReset = () => {
  boxScaleRef.value && (boxScaleRef.value.style.willChange = 'transform')
  zoomValue.value = 100
  boxScaleRef.value && (boxScaleRef.value.style.willChange = 'auto')
}

const nodeClick = (node: NodeConfig) => {
  console.log(node)
}
</script>

<style scoped>
.page-container {
  height: 100vh;
  padding: 16px;
  background-color: var(--color-fill-2);
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.btns-wrap {
  width: 100%;
  padding-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .total-wrapper {
    font-size: 14px;
    color: rgb(var(--red-4));
    font-weight: 500;
    .total-item {
      font-weight: 400;
      color: var(--color-neutral-6);
    }
  }
}
.progress-wrap {
    width: 100%;
    height: calc(100% - 110px);
    padding-left: 74px;
    overflow: auto;
  }
  .scale-wrap {
    display: flex;
    align-items: center;
    transition: transform .3s;
    margin-top: 80px;
  }
  .zoom {
    display: flex;
    position: fixed;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 40px;
    width: 132px;
    right: 50%;
    transform: translateX(50%);
    margin-top: 10px;
    z-index: 10;
    font-size: 14px;
  }

  .zoom .zoom-up,
  .zoom .zoom-down {
    width: 20px;
    height: 20px;
    background: #fff;
    color: #c1c1cd;
    cursor: pointer;
  }

  .zoom .zoom-down {
    background: url('@/assets/images/zoom-down.png');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }

  .zoom .zoom-down.disabled {
    opacity: .5
  }

  .zoom .zoom-up {
    background: url('@/assets/images/zoom-up.png');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }

  .zoom .zoom-up.disabled {
    opacity: .5
  }
  .reset-cls {
    font-size: 14px;
    color: #a6a6ab;
    cursor: pointer;
    &:hover {
      color: #6e6ee5;
    }
  }
</style>
