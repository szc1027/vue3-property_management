<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="role">
    <BaseTable :tableList="tableList" v-bind="tableConfig">
      <template #payWaterStatus="scope">
        <el-tag :type="scope.row.payWaterStatus == 0 ? '' : 'success'">
          {{ scope.row.payWaterStatus == 1 ? '已缴费' : '未交费' }}
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
import { ref, reactive, toRefs } from 'vue'
import { tableConfig } from './config/table.config'
const tableList = ref([
  {
    waterId: 8,
    houseId: 2,
    userId: 18,
    payWaterMonth: '2020-01',
    payWaterMoney: 500,
    waterrNum: '1000',
    payWaterStatus: '1',
    payWaterTime: '2021-07-08T11:40:49.000+00:00',
    loginName: '张三',
    phone: '18687116223',
    houseNum: 'A-102',
    unitName: 'A-2',
    buildId: 1,
    unitId: 3,
    name: 'A栋'
  },
  {
    waterId: 9,
    houseId: 7,
    userId: 19,
    payWaterMonth: '2021-07',
    payWaterMoney: 300,
    waterrNum: '300',
    payWaterStatus: '1',
    payWaterTime: '2021-07-09T13:31:40.000+00:00',
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
