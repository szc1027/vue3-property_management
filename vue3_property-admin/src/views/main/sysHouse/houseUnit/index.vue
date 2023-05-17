<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="role">
    <BaseTable :tableList="tableList" v-bind="tableConfig">
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
    unitId: 2,
    buildId: 2,
    unitName: 'B-1',
    name: 'B栋'
  },
  {
    unitId: 3,
    buildId: 1,
    unitName: 'A-2',
    name: 'A栋'
  },
  {
    unitId: 4,
    buildId: 1,
    unitName: 'A-1',
    name: 'A栋'
  },
  {
    unitId: 8,
    buildId: 1,
    unitName: 'D单元111',
    name: 'A栋'
  },
  {
    unitId: 10,
    buildId: 6,
    unitName: 'D-1单元',
    name: 'D栋'
  }
])
</script>
<style lang="scss" scoped></style>
