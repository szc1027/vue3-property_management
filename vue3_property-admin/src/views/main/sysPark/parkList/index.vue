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
      <template #parkType="scope">
        <el-tag :type="scope.row.parkType == 1 ? '' : 'success'">
          {{ scope.row.parkType == 1 ? '地下' : '地上' }}
        </el-tag>
      </template>
      <template #parkStatus="scope">
        <el-tag :type="scope.row.parkStatus == 1 ? '' : 'success'">
          {{ scope.row.parkStatus == 1 ? '未使用' : '已使用' }}
        </el-tag>
      </template>
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" type="primary">编辑</el-button>
          <el-button size="default" type="danger">删除</el-button>
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
    parkId: 1,
    parkType: '0',
    parkName: 'A001',
    parkStatus: '1',
    parkNum: 1
  },
  {
    parkId: 3,
    parkType: '1',
    parkName: 'B001',
    parkStatus: '1',
    parkNum: 1
  },
  {
    parkId: 4,
    parkType: '0',
    parkName: 'C001',
    parkStatus: '0',
    parkNum: 2
  },
  {
    parkId: 5,
    parkType: '0',
    parkName: 'D001',
    parkStatus: '0',
    parkNum: 3
  }
])
</script>
<style lang="scss" scoped></style>
