<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="role">
    <QueryForm v-bind="formConfig" v-model="formData">
      <template #button>
        <el-button icon="search">查询</el-button>
        <el-button icon="delete" @click="handleReset">重置</el-button>
        <el-button icon="plus" type="primary">新增</el-button>
      </template>
    </QueryForm>
    <BaseTable :tableList="tableList" v-bind="tableConfig">
      <template #status="scope">
        <el-tag :type="scope.row.status == 0 ? '' : 'success'">
          {{ scope.row.status == 1 ? '已使用' : '未使用' }}
        </el-tag>
      </template>
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" icon="EditPen" type="primary">编辑</el-button>

          <el-button size="default" icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
    </BaseTable>
  </div>
</template>
<script setup lang="ts">
import BaseTable from '@/baseUI/table'
import QueryForm from '@/baseUI/from'
import { tableConfig } from './config/table.config'
import { formConfig } from './config/form.config'
import { ref } from 'vue'

const formItems = formConfig?.formList?.filter((item) => item.field)
const formOrigin = {}
for (const item of formItems) {
  formOrigin[item.field] = ''
}

const formData = ref(formOrigin)

const page = ref({
  currentPage: 1,
  pageSize: 10
})

const handleReset = () => {
  for (const key in formOrigin) {
    formData.value[key] = formOrigin[key]
  }
}

const tableList = ref([
  {
    houseId: 2,
    buildId: 1,
    unitId: 3,
    houseNum: 'A-102',
    name: 'A栋',
    unitName: 'A-2',
    houseArea: '90',
    status: '0'
  },
  {
    houseId: 3,
    buildId: 1,
    unitId: 3,
    houseNum: 'A-103',
    name: 'A栋',
    unitName: 'A-2',
    houseArea: '88',
    status: '1'
  },
  {
    houseId: 4,
    buildId: 1,
    unitId: 3,
    houseNum: 'A-104',
    name: 'A栋',
    unitName: 'A-2',
    houseArea: '66',
    status: '1'
  },
  {
    houseId: 5,
    buildId: 2,
    unitId: 2,
    houseNum: 'B-101',
    name: 'B栋',
    unitName: 'B-1',
    houseArea: '78',
    status: '0'
  },
  {
    houseId: 7,
    buildId: 6,
    unitId: 10,
    houseNum: 'D-101',
    name: 'D栋',
    unitName: 'D-1单元',
    houseArea: '120',
    status: '1'
  }
])
</script>
<style lang="scss" scoped></style>
