<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>登录</h1>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/api'
import router from '@/router'
import { onMounted } from 'vue'

const ty = {
  username: 'admin',
  password: '123456',
  userType: '1'
}

onMounted(() => {
  getLoginInfo(ty).then((res: any) => {
    console.log('res=>', res)
    localStorage.setItem('token', res.data.data.token), router.push('/')
  })
})
</script>

<style lang="scss" scoped></style>
