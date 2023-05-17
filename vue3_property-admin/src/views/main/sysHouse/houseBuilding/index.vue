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
      <template #type="scope">
        <el-tag :type="scope.row.type == 1 ? '' : 'success'">
          {{ scope.row.type == 1 ? '电梯房' : '普通房' }}
        </el-tag>
      </template>
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" icon="EditPen" type="primary">编辑</el-button>
          <el-button size="default" icon="EditPen" type="success">分配权限</el-button>
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
    buildId: 1,
    type: '0',
    name: 'A栋',
    orderNum: 1
  },
  {
    buildId: 2,
    type: '1',
    name: 'B栋',
    orderNum: 2
  },
  {
    buildId: 4,
    type: '0',
    name: '测试',
    orderNum: 3
  },
  {
    buildId: 5,
    type: '1',
    name: 'C栋',
    orderNum: 5
  },
  {
    buildId: 6,
    type: '1',
    name: 'D栋',
    orderNum: 6
  }
])
</script>
<style lang="scss" scoped></style>
