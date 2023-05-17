<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="role">
    <BaseTable :tableList="tableList" v-bind="tableConfig">
      <template #status="scope">
        <el-tag :type="scope.row.status == 0 ? '' : 'success'">
          {{ scope.row.status == 1 ? '已处理' : '未处理' }}
        </el-tag>
      </template>
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" icon="EditPen" type="primary">处理</el-button>
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
    repairId: 6,
    userId: 19,
    phone: '18787171906',
    repairAddress: 'D栋D单元D101',
    repairContent: '下水道堵塞',
    commitTime: '2021-07-09T13:32:59.000+00:00',
    status: '1'
  },
  {
    repairId: 5,
    userId: 18,
    phone: '18687116223',
    repairAddress: 'A栋3单元502',
    repairContent: '下水道堵塞',
    commitTime: '2021-07-09T11:02:51.000+00:00',
    status: '1'
  },
  {
    repairId: 4,
    userId: 4,
    phone: '很好11',
    repairAddress: '很好112',
    repairContent: '很好111',
    commitTime: '2021-06-25T10:45:32.000+00:00',
    status: '1'
  },
  {
    repairId: 3,
    userId: 4,
    phone: '测试1',
    repairAddress: '测试1',
    repairContent: '测试1',
    commitTime: '2021-06-25T10:22:08.000+00:00',
    status: '1'
  },
  {
    repairId: 1,
    userId: 4,
    phone: '186871162236',
    repairAddress: 'A栋3单元5026',
    repairContent: '天然气阀门漏气6',
    commitTime: '2021-06-25T08:51:47.000+00:00',
    status: '1'
  }
])
</script>
<style lang="scss" scoped></style>
