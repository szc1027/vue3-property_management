<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="role">
    <BaseTable :tableList="tableList" v-bind="tableConfig">
      <template #parkType="scope">
        <el-tag :type="scope.row.parkType == 1 ? '' : 'danger'">
          {{ scope.row.parkType == 0 ? '地上' : '地下' }}
        </el-tag>
      </template>
      <template #payParkStatus="scope">
        <el-tag :type="scope.row.payParkStatus == 0 ? '' : 'success'">
          {{ scope.row.payParkStatus == 1 ? '已缴费' : '未交费' }}
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
    parkFeeId: 11,
    userId: 18,
    parkId: 1,
    payParkMonth: '2020-01',
    payParkMoney: 100,
    payParkStatus: '1',
    payParkTime: null,
    loginName: '张三',
    phone: '18687116223',
    parkName: 'A001',
    parkType: '0'
  },
  {
    parkFeeId: 12,
    userId: 19,
    parkId: 5,
    payParkMonth: '2021-07',
    payParkMoney: 150,
    payParkStatus: '1',
    payParkTime: null,
    loginName: '李四',
    phone: '18787171906',
    parkName: 'D001',
    parkType: '0'
  }
])
</script>
<style lang="scss" scoped></style>
