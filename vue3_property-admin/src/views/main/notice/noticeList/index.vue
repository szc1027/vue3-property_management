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
      <template #action>
        <div style="padding: 5px 0">
          <el-button size="default" icon="EditPen" type="primary">编辑</el-button>
          <el-button size="default" icon="EditPen" type="danger">删除</el-button>
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
    noticeId: 6,
    userId: null,
    title: '1',
    noticeContent: '1',
    createTime: '2022-10-15 09:46:09'
  },
  {
    noticeId: 3,
    userId: null,
    title: '测试',
    noticeContent: '测试',
    createTime: '2021-06-25 14:20:47'
  },
  {
    noticeId: 1,
    userId: null,
    title: '环境卫生1',
    noticeContent: '请大家不要随地乱扔垃圾！',
    createTime: '2021-06-25 14:14:53'
  }
])
</script>
<style lang="scss" scoped></style>
