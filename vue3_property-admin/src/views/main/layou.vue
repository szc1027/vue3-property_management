<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <div>首页</div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const data = reactive({})
</script>
<style scoped></style>
