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
import { ref, reactive, toRefs } from 'vue'
import { tableConfig } from './config/table.config'
import { formConfig } from './config/form.config'

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
    roleId: 5,
    roleName: '管理员角色',
    remark: '管理员角色'
  },
  {
    roleId: 6,
    roleName: '水费管理员',
    remark: '收水费'
  },
  {
    roleId: 8,
    roleName: '业主',
    remark: '租住房子的人'
  }
])
</script>
<style lang="scss" scoped></style>
