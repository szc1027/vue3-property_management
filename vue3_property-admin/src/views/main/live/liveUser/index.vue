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
      <template #sex="scope">
        <el-tag :type="scope.row.sex == 1 ? '' : 'success'">
          {{ scope.row.sex == 0 ? '男' : '女' }}
        </el-tag>
      </template>
      <template #status="scope">
        <el-tag :type="scope.row.status == 0 ? '' : 'danger'">
          {{ scope.row.status == 1 ? '禁用' : '启用' }}
        </el-tag>
      </template>
      <template #action>
        <div style="padding: 5px 0">
          66
          <el-button size="default" type="success">编辑</el-button>
          <el-button size="default" type="primary">分配房屋</el-button>
          <el-button size="default" type="success">分配车位</el-button>
          <el-button size="default" type="danger">退房</el-button>
          <el-button size="default" type="warning">退车位</el-button>
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
    userId: 18,
    username: 'zs111',
    phone: '18687116223',
    sex: '1',
    loginName: '张三',
    password: null,
    status: '1',
    roleId: null,
    houseNum: 'A-104',
    houseArea: '66',
    unitName: 'A-2',
    name: 'A栋',
    parkName: 'A001',
    houseId: 4,
    parkId: 1,
    useStatus: '0',
    liveStatue: '0',
    authorities: null,
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  },
  {
    userId: 19,
    username: 'ls666',
    phone: '18787171906',
    sex: '0',
    loginName: '李四',
    password: null,
    status: '0',
    roleId: null,
    houseNum: 'D-101',
    houseArea: '120',
    unitName: 'D-1单元',
    name: 'D栋',
    parkName: null,
    houseId: 7,
    parkId: null,
    useStatus: '0',
    liveStatue: null,
    authorities: null,
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true
  }
])
</script>
<style lang="scss" scoped></style>
