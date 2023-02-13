<script setup lang="ts">

import { ref } from 'vue'
import { Api } from '@/api'

const contact = ref("")
const password = ref("")

function login(contact: string, password: string) {
  Api("POST", "/login", null, {contact, password})
  .then(e => alert("登录成功" + e))
  .catch(e => "登录失败" + e)
}

</script>

<template>
  <div id="login" v-title data-title="登录">

    <div class="me-login-box me-login-box-radius">
      <h1>登录</h1>

      <el-form ref="userForm" >
        <el-form-item prop="contact">
          <el-input placeholder="用户名" v-model="contact"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="密码" type="password" v-model="password"></el-input>
        </el-form-item>

        <el-form-item size="medium" class="me-login-button">
          <el-button type="primary" @click.native.prevent="login(contact, password)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>

</style>