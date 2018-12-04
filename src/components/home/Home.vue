<template>
  <el-container class="home-container">
    <el-header class="home-header">
      <el-row :gutter="20">
        <el-col :span="4">
          <img src="@/assets/logo.png" alt="黑马程序员">
        </el-col>
        <el-col :span="16" class="title">电商后台管理系统</el-col>
        <el-col :span="4">
          <span>欢迎上海前端28期星耀会员</span>
          <a href="javascript:;" class="logout" @click="logoutHome">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="home-content">
      <el-aside width="200px" class="home-aside">
        <el-menu
          class="menu"
          default-active="2"
          text-color="#fff"
          background-color="#545c64"
        >
          <el-submenu :index="item.path" v-for="item in menuList" :key='item.id'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
             <el-menu-item :index="item2.path" v-for="item2 in item.children" :key="item2.id">
                  <i class="el-icon-menu"></i>
                  <span>{{item2.authName}}</span>
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="home-main"></el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      menuList: []

    }
  },
  created () {
    this.fetchMenuList()
  },
  methods: {
    // 菜单栏数据获取
    fetchMenuList () {
      this.$http.get('menus').then(res => {
        const {data, meta} = res.data
        if (meta.status === 200) {
          // 将获取到的数据存起来
          this.menuList = data
        }
      })
    },
    // 点击退出按钮
    logoutHome () {
      this.$confirm('你确定要退出吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 确认退出，移除localStorage里面的token
        localStorage.removeItem('token')
        // 跳转到登录页
        this.$router.push('login')
        this.$message({
          type: 'success',
          message: '退出成功!',
          duration: 1000
        })
      }).catch(() => {
        // 取消退出
        this.$message({
          type: 'info',
          message: '已取消退出',
          duration: 1000
        })
      })
    }
  }
}
</script>

<style>
.home-container,
.home-content,
.home-aside,
.home-main,
.home-aside .menu {
  height: 100%;
}
.home-header {
  background-color: #b3c1cd;
  line-height: 60px;
  font-weight: bolder;
}
.home-header .logo {
  min-width: 180px;
}
.home-header img {
  width: 180px;
  vertical-align: middle;
}
.home-header .title {
  font-size: 30px;
  color: #ffffff;
  text-align: center;
}
.home-header .logout {
  color: #b07a17;
}
.home-aside {
  background-color: #d4dfe4;
}
</style>
