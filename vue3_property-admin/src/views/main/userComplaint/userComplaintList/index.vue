<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="role">
    <BaseTable :tableList="tableList" v-bind="tableConfig">
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" icon="Delete" type="success">删除</el-button>
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
    complaintId: 5,
    userId: 4,
    title: '测试11123',
    complaintContent: '测试11123',
    createTime: '2021-06-24T14:01:32.000+00:00',
    status: '1'
  },
  {
    complaintId: 6,
    userId: 4,
    title: '乱丢垃圾',
    complaintContent: '1栋乱丢垃圾',
    createTime: '2021-06-24T14:06:18.000+00:00',
    status: '1'
  },
  {
    complaintId: 7,
    userId: 18,
    title: 'A栋下水道井盖坏了',
    complaintContent: 'A栋下水道井盖坏了',
    createTime: '2021-07-09T11:02:02.000+00:00',
    status: '1'
  },
  {
    complaintId: 8,
    userId: 19,
    title: '乱丢垃圾',
    complaintContent: 'D栋乱丢垃圾',
    createTime: '2021-07-09T13:31:11.000+00:00',
    status: '1'
  }
])
</script>
<style lang="scss" scoped></style>
