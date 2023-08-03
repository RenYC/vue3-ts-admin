<template>
  <div>
    <el-button type="primary" @click="exportExcel">导出</el-button>
    <el-table id="out-table" :data="tableData" border style="width: 100%" class="tableBox">
      <el-table-column prop="number" label="工单号" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="zip" label="Zip" width="120" />
    </el-table>
    <!-- 表格end -->
  </div>
</template>

<script setup lang="ts">
// 引入导出Excel表格依赖
import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'

const tableData = [
  {
    number: '546456455',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    number: '9845515',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    number: '8798121',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }
]

// 导出表格  按钮点击后触发事件
const exportExcel = () => {
  /* 从表生成工作簿对象 */
  // var wb = XLSX.utils.table_to_book(document.querySelector('#out-table2'))
  // 创建工作簿和工作表
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.json_to_sheet(
    tableData.map((item) => {
      return { 工单号: item.number }
    })
  )
  worksheet['!cols'] = [
    { wch: 30 } // 列A的宽度为15个字符
    // ...
  ]
  // 将工作表添加到工作簿
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1')

  /* 获取二进制字符串作为输出 */
  var wbout = XLSX.write(workbook, {
    bookType: 'xlsx',
    bookSST: true,
    type: 'buffer'
  })
  try {
    FileSaver.saveAs(
      //Blob 对象表示一个不可变、原始数据的类文件对象。
      //Blob 表示的不一定是JavaScript原生格式的数据。
      //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
      //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
      new Blob([wbout], { type: 'application/octet-stream' }),
      //设置导出文件名称
      '预警记录.xlsx'
    )
  } catch (e) {
    if (typeof console !== 'undefined') console.log(e, wbout)
  }
  return wbout
}
</script>

<style scoped></style>
