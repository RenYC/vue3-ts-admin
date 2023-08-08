<template>
  <div>
    <el-button type="primary" @click="exportWord(form)">导出</el-button>

    <echartsVue ref="echartsEl"></echartsVue>
  </div>
</template>

<script setup lang="ts">
import echartsVue from '@/views/rich/echarts/index.vue'

import { ref } from 'vue'
import JSZipUtils from 'jszip-utils'
import docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver'
import PizZip from 'pizzip'
import ImageModule from 'docxtemplater-image-module-free'

const echartsEl = ref()
const form = ref({
  year: '2023',
  month: '01',
  day: '01'
})
// 读取并获得模板文件的二进制内容
function exportWord(data: any) {
  const src = echartsEl.value.onClick()
  JSZipUtils.getBinaryContent('/导出文档模板.docx')
    .then((content: PizZip.LoadData) => {
      // 创建一个 PizZip 实例，内容为模板的内容
      let zip = new PizZip(content)

      let opts: any = {}

      opts = {
        //图像是否居中
        centered: true
      }
      opts.getImage = (chartId: any) => {
        //将base64的数据转为ArrayBuffer
        return base64DataURLToArrayBuffer(chartId)
      }
      opts.getSize = function (img: any, tagValue: any, tagName: any) {
        //自定义指定图像大小
        return [500, 300]
      }

      const imageModule = new ImageModule(opts)
      // 创建并加载docxtemplater实例对象
      let doc = new docxtemplater().loadZip(zip).attachModule(imageModule).compile()
      // 设置模板变量的值
      doc.setData({
        ...data, //这里是上面form表单的内容
        src
      })
      try {
        // 用模板变量的值替换所有模板变量
        doc.render()
      } catch (error: any) {
        // 抛出异常
        let e = {
          message: error.message,
          name: error.name,
          stack: error.stack,
          properties: error.properties
        }
        console.log(
          JSON.stringify({
            error: e
          })
        )
        throw error
      }
      // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
      let out = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      })
      // 将目标文件对象保存为目标类型的文件，并命名
      saveAs(out, '报告文档.docx')
    })
    .catch((error: any) => {
      // input.docx是模板。我们在导出的时候，会根据此模板来导出对应的数据
      // 抛出异常
      if (error) {
        throw error
      }
    })
}

/**
 * 将base64格式的数据转为ArrayBuffer
 * @param {Object} dataURL base64格式的数据
 */
function base64DataURLToArrayBuffer(dataURL: any) {
  const base64Regex = /^data:image\/(png|jpg|jpeg|svg|svg\+xml);base64,/
  if (!base64Regex.test(dataURL)) {
    return false
  }
  const stringBase64 = dataURL.replace(base64Regex, '')
  let binaryString
  if (typeof window !== 'undefined') {
    binaryString = window.atob(stringBase64)
  } else {
    binaryString = Buffer.from(stringBase64, 'base64').toString('binary')
  }
  const len = binaryString.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    const ascii = binaryString.charCodeAt(i)
    bytes[i] = ascii
  }
  return bytes.buffer
}
</script>

<style scoped></style>
