<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <img src="@/assets/logo.png" alt="">
        </el-col>
        <el-col :span="19" class="middle">
          <h2>电商后台管理系统</h2>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg_purple">
            <a href="#" @click.prevent="handleLogout()" class="loginout">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu default-active="1" :router="true" :unique-opened="true">
          <!-- 用户管理 -->
          <el-submenu v-for="(item1,i) in menus" :key="item1.id" :index="item1.order+''">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item1.authName}}</span>
            </template>
            <el-menu-item  v-for="(item2,i) in item1.children" :key="item2.id" :index="item2.path+''">
              <i class="el-icon-menu"></i>
              {{item2.authName}}</el-menu-item>
          </el-submenu>

          <!-- 权限管理 -->
          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="rights">
              <i class="el-icon-menu"></i>
              权限列表</el-menu-item>
            <el-menu-item index="roles">
              <i class="el-icon-menu"></i>
              角色列表</el-menu-item>
          </el-submenu> -->

          <!-- 商品 -->
          <!-- <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              商品列表</el-menu-item>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              分类参数</el-menu-item>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              商品分类</el-menu-item>
          </el-submenu> -->
          <!-- 订单 -->
          <!-- <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              订单 列表</el-menu-item>

          </el-submenu> -->
          <!-- 统计 -->
          <!-- <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              数据报表</el-menu-item>
          </el-submenu> -->
        </el-menu>

      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    };
  },
  beforeMount() {
    // if (!localStorage.getItem("token")) {
    //   this.$router.push({
    //     name: "login"
    //   });
    // }
  },
  created() {
    this.getMenus();
  },
  methods: {
    // 获取侧边栏
    async getMenus() {
      const res = await this.$http.get(`menus`);
      const { data, meta: { msg, status } } = res.data;
      if (status === 200) {
        // 渲染侧边栏
        this.menus = data;
        console.log(this.menus);
      }
    },
    // 退出登录
    handleLogout() {
      // 清除token
      localStorage.clear();
      // 跳转到login
      this.$router.push({
        name: "login"
      });
      // 提示
      this.$message.warning("退出成功");
    }
  }
};
</script>

<style>
.container {
  height: 100%;
  background-color: #b3c0d1;
}
.middle {
  text-align: center;
  line-height: 60px;
}
.main {
  background-color: gray;
}
.loginout {
  line-height: 60px;
  text-decoration: none;
}
</style>
