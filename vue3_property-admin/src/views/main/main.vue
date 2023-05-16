<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header-box">
          <img src="http://wyp.2yuecloud.com/favicon.ico" alt="" />
          <p>物业管理系统</p>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#2f4151"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
          >
            <el-menu-item index="1">
              <el-icon><Menu /></el-icon>
              <span>首页</span>
            </el-menu-item>

            <el-sub-menu v-for="(item, index) in Menulist" :key="index" :index="item.path">
              <template #title>
                <el-icon><Menu /></el-icon>
                <span>{{ item.meta.title }}</span>
              </template>
              <el-menu-item v-for="(it, index) in item.children" :key="index" :index="it.path">{{
                it.meta.title
              }}</el-menu-item>
            </el-sub-menu>

            <!-- <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { getMenuList } from '@/api/api'

import { ref, reactive, onMounted } from 'vue'
const Menulist = ref()
onMounted(() => {
  getMenuList().then(({ data }) => {
    console.log(data)
    Menulist.value = data.data
    console.log(data.data)
  })
})
</script>
<style scoped>
.el-header {
  padding: 0;
  width: 100vw;
  background-color: aquamarine;
}
.el-aside {
  height: 94vh;
  background-color: #2f4151;
}
.header-box {
  width: 200px;
  height: 100%;
  color: #fff;
  background-color: #262c37;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  font-weight: 900;
}
.header-box img {
  width: 50px;
  height: 50px;
}
</style>
