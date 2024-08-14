export const nodeData = {
  "nodeName": "新建计划",
  "type": 0,
  "status": "success",
  "remark": "张三提交申请",
  "modelTime": "2024-01-01 00:00:00",
  "childNode": {
    "nodeName": "审核计划",
    "type": 1,
    "status": "success",
    "remark": "李四审核通过",
    "modelTime": "2024-01-01 00:00:00",
    "childNode": {
      "nodeName": "路由",
      "type": 4,
      "conditionNodes": [
        {
          "nodeName": "通过",
          "type": 3,
          "childNode": {
            "nodeName": "配送出库",
            "type": 1,
            "status": "success",
            "remark": "王苗苗开始拣货出库",
            "modelTime": "2024-01-01 00:00:00",
            "childNode": {
              "nodeName": "审核配送出库单",
              "type": 1,
              "status": "success",
              "remark": "圆圆审核通过出库单",
              "modelTime": "2024-01-01 00:00:00",
              "childNode": {
                "nodeName": "科室收获",
                "type": 1,
                "status": "error",
                "remark": "小丽收获",
                "modelTime": "2024-01-01 00:00:00",
                "childNode": {
                  "nodeName": "审核配送出库单",
                  "type": 1,
                  "status": "success",
                  "remark": "圆圆审核通过出库单",
                  "modelTime": "2024-01-01 00:00:00",
                }
              }
            }
          }
        },
        {
          "nodeName": "通过",
          "type": 3,
          "childNode": {
            "nodeName": "新建采购",
            "type": 1,
            "status": "",
            "modelTime": "2024-01-01 00:00:00",
            "childNode": {
              "nodeName": "审核采购",
              "type": 1,
              "status": "",
              "childNode": null,
              "remark": "审核采购",
              "modelTime": "2024-01-01 00:00:00"
            }
          }
        },
        {
          "nodeName": "不通过",
          "type": 3,
          "childNode": {
            "nodeName": "test",
            "type": 1,
            "status": "success",
            "remark": "王苗苗开始拣货出库",
            "childNode": {
              "nodeName": "审核配送出库单",
              "type": 1,
              "status": "success",
              "remark": "圆圆审核通过出库单",
              "childNode": {
                "nodeName": "test2",
                "type": 1,
                "status": "",
                "childNode": null,
                "remark": "小丽收获"
              }
            }
          }
        }
      ]
    }
  }
}
