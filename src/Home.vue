<script setup lang="ts">

import router from '@/router';

function route() {
  router.push({
    name: 'login'
  })
}

</script>

<template>
  <div class="common-layout">
    <el-container class="target wrapper">
      <el-header>

      </el-header>
      <el-main>
        <div> HELLO, WORLD </div>
        <button @click="route()">CLICK ME!</button>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
</style>

