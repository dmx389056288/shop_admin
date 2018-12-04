<template>
  <div class="login-container">
    <el-form class="login-form" :rules="rules" :model="loginFrom" ref="login">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginFrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginFrom.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="resetFrom">重置</el-button>
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
  },
  methods: {
    // 点击登录按钮
    login () {
      // 点击登录按钮，效验表单
      this.$refs.login.validate((valid) => {
        // console.log(valid)
        if (valid) {
          this.$http.post('login', this.loginFrom).then(res => {
            const { data, meta } = res.data
            const {status, msg} = meta
            if (status === 200) {
              // 跳转到主页
              console.log(data)
              console.log(msg)
              // 将token存储到本地
              localStorage.setItem('token', data.token)
              // 路由跳转到主页
              this.$router.push('/home')
              // 登录成功消息提示
              this.$message({
                type: 'success',
                message: msg,
                duration: 1000
              })
            } else {
              this.$message.error(msg)
            }
          })
        } else {
          return false
        }
      })
    },
    // 点击重置按钮,重置表单
    resetFrom () {
      this.$refs.login.resetFields()
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
