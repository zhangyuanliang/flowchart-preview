# flowchart-preview

流程图渲染插件，不支持拖拽功能，可用于流程图预览

- 效果预览

![Image text](https://photo.qihaikj.com/workflow-preview.png)

- 安装

```bash
npm i flowchart-preview
```

- NodeJs

```bash
版本 >= 14.0.0
```

插件使用可查看源码 playground 下的代码，以下是关键部分

main.ts 代码

``` ts
// 全局注册 - main.ts
import FlowchartPreview from 'flowchart-preview'

app.use(FlowchartPreview) // 修改组件名称 app.use(FlowchartPreview, { name: 'xxx'})

// 局部引用组件 - xxx.vue
import { FlowchartPreview } from 'flowchart-preview';

```

xxx.vue 代码

``` vue
<FlowchartPreview :nodeConfig="nodeData" @nodeClick="nodeClick" />

<script setup lang="ts">
const nodeData = ref({
  nodeName: '新建计划',
  type: 0,
  status: 'success',
  remark: '张三提交申请',
  modelTime: '2024-01-01 00:00:00',
  childNode: {
    nodeName: '审核计划',
    type: 1,
    status: 'success',
    remark: '李四审核通过',
    modelTime: '2024-01-01 00:00:00',
    childNode: {
      ...
    }
  }
})

const nodeClick = () => {
  ...
}

</script>

```

## 插件源码项目启动

```bash
// 项目根目录下
pnpm install

pnpm run build

pnpm run dev
```

>
>注：优秀的程序员不是写天花乱坠的代码，让人难以理解，而是写让人一看就懂的代码。
>有写的不妥的地方，欢迎大家批评指正。邮箱：sailing.yuanliang@gmail.com