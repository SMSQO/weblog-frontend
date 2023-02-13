<script setup lang="ts">

import {Api} from '@/api'
import type { long, BloggerInfo } from '@/entity'
import { reactive, ref, type Ref } from 'vue'
import router from '@/router'

const email = ref("")
const bloggerId = ref<long>()
const bloggerInfo = ref<BloggerInfo>()

function login(contact: string, password: string) {
  Api<long>("POST", "/login", null, { contact, password })
  .then(id => {
    bloggerId.value = id
    console.log(id)
  })
}

function getSelfInfo() {
  Api<BloggerInfo>("GET", "/blogger/self")
  .then((e: BloggerInfo) => {
    console.log(e)
    // bloggerInfo.value = e
  })
}

function updateInfo() {
  console.log(email.value)
  Api<null>("PATCH", `/blogger/1`, {email: email.value})
  .then(_ => console.log("UPDATED"))
}

function logout() {
  Api<null>("POST", "/logout")
  .then(_ => {
    bloggerId.value = undefined
    bloggerInfo.value = undefined
    console.log("LOGGED OUT")
  })
}


function changePage() {
  router.push("/test")
}

</script>

<template>
  <header>
    <div>
      <!-- <router-view/> -->
    </div>
    <div>
      <div> current blogger id = {{ bloggerId ?? "Not yet" }}</div>
      <el-input v-model="email" placeholder="Please Input Email"></el-input>
      <el-button type="primary" @click="login('15000000001', 'password_1')">LOGIN</el-button>
      <el-button @click="getSelfInfo()">GETINFO</el-button>
      <el-button @click="logout()">LOGOUT</el-button>
      <el-button @click="updateInfo()">UPDATE</el-button>
      <el-button @click="changePage()">CHANGE PAGE</el-button>
    </div>
  </header>
</template>

<style scoped>

</style>
<style>
  /* 实用方法: 在想要知道位置的组件上设置class="target", 就可以用红圈圈出它了. */
  /* 在所有文件中都可以用 */
  .target {
    border: 1px red solid;
  }
</style>