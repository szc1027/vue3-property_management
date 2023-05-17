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
      <template #payPowerStatus="scope">
        <el-tag :type="scope.row.payPowerStatus == 1 ? '' : 'danger'">
          {{ scope.row.payPowerStatus == 1 ? '已缴费' : '未交费' }}
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
    powerId: 16,
    houseId: 2,
    userId: 18,
    payPowerMonth: '2021-01',
    payPowerMoney: 200,
    powerNum: '1002',
    payPowerStatus: '1',
    payPowerTime: null,
    loginName: '张三',
    phone: '18687116223',
    houseNum: 'A-102',
    unitName: 'A-2',
    buildId: 1,
    unitId: 3,
    name: 'A栋'
  },
  {
    powerId: 17,
    houseId: 7,
    userId: 19,
    payPowerMonth: '2021-07',
    payPowerMoney: 500,
    powerNum: '500',
    payPowerStatus: '0',
    payPowerTime: null,
    loginName: '李四',
    phone: '18787171906',
    houseNum: 'D-101',
    unitName: 'D-1单元',
    buildId: 6,
    unitId: 10,
    name: 'D栋'
  },
  {
    powerId: 18,
    houseId: 7,
    userId: 19,
    payPowerMonth: '2021-06',
    payPowerMoney: 400,
    powerNum: '400',
    payPowerStatus: '0',
    payPowerTime: null,
    loginName: '李四',
    phone: '18787171906',
    houseNum: 'D-101',
    unitName: 'D-1单元',
    buildId: 6,
    unitId: 10,
    name: 'D栋'
  }
])
</script>
<style lang="scss" scoped></style>
