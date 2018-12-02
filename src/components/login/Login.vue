<template>
  <div class="login-container">
    <el-form class="login-form" :rules="rules" :model="loginFrom">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginFrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginFrom.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>登录</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginFrom: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          {max: 12, min: 5, message: '用户名应该在5到12位之间', trigger: 'blur'}
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
<style>
.login-container {
  width: 100%;
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
}
.login-form {
  width: 400px;
  padding: 20px;
  margin: 200px auto;
  background-color: #fff;
  border-radius: 15px;
}
</style>
