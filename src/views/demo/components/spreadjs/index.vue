<template>
  <div id="spread-host">
    <!-- <gc-spread-sheets hostClass="spreadHost" @workbookInitialized="initWorkbook">
    </gc-spread-sheets> -->
    <input type="file" @change="handleFileChange" />
    <button @click="toJSON">打印数据</button>
    <button @click="getActiveSheet">获取活动表</button>
    <div ref="spreadsheetContainer" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script setup lang="ts">
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
// import * as GC from '@grapecity/spread-sheets'
// import '@grapecity/spread-sheets-vue'
// 导入ExcelIO模块
// import { IO } from '@grapecity/spread-excelio'
import { ref, onMounted } from 'vue'

function initWorkbook(spread) {
  //  /initialize the spread
  let sheet = spread.getActiveSheet()

  //Setting Values - Text
  sheet.getCell(0, 0).vAlign(GC.Spread.Sheets.VerticalAlign.center).value('Hello SpreadJS')
  sheet.setValue(1, 1, 'Setting Values')

  //Setting style
  sheet.setColumnWidth(1, 200)
  sheet.setColumnWidth(2, 200)
  sheet.getRange(1, 1, 1, 2).backColor('rgb(130, 188, 0)').foreColor('rgb(255, 255, 255)')

  // 绑定数据
  var sheetData = spread.getSheet(0)
  var person = { name: 'Peter Winston', age: 25, gender: 'Male', address: { postcode: '10001' } }
  var source = new GC.Spread.Sheets.Bindings.CellBindingSource(person)
  sheetData.setBindingPath(2, 2, 'name')
  sheet.setDataSource(source)
}

const spreadsheetContainer = ref()
let spread = null

onMounted(() => {
  spread = new GC.Spread.Sheets.Workbook(spreadsheetContainer.value, { sheetCount: 5 })
})

function handleFileChange(event) {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = (e) => {
      const data = e.target.result
      loadExcelData(data)
    }

    reader.readAsArrayBuffer(file)
  }
}
// console.log(new GC())

function loadExcelData(data) {
  // const excelIo = new IO()
  const excelIo = new GC.Spread.Excel.IO()
  // const options = new GC.Spread.Excel.LoadOptions()
  // options.password = '' // If the file is password protected, set the password here

  excelIo.open(
    data,
    (json) => {
      // spread.clearSheets()
      // const sourceSheet = workbook.getSheet(0)
      // const destSheet = spread.getActiveSheet()

      spread.fromJSON(json)
      console.log(spread.getSheetCount())
    },
    function (e) {
      // process error
      console.log(e.errorMessage)
    },
    {
      password: '75801'
    }
  )
}

function toJSON() {
  console.log(spread.toJSON({ includeBindingSource: true }))
}
function getActiveSheet() {
  //获取活动表
  var sheet = spread.getActiveSheet()
  // 通过行和列信息获取区域
  var range = sheet.getRange('A1:E5', GC.Spread.Sheets.SheetArea.viewport)
  console.log(range)
}
</script>

<style lang="scss" scoped>
.spreadHost {
  width: 800px;
  height: 800px;
}
</style>
