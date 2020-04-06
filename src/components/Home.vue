<template>
  <el-container class="home_container">
    <!-- 头部部分 -->
    <el-header>
      <!-- 头标题部分 -->
      <div class="header_title">
        <div class="header_title_logo">OneIoT</div>
        <div class="header_title_gps">
          <a href="javascript:;">置铖荣华府二期1-9号及地下车库</a>
        </div>
        <!-- 个人中心退出登录 -->
        <div class="header_title_layout">
          <!-- 拿不到用户名 -->
          <span class="header_title_layout_username">username</span>
          <!-- 用户头像 -->
          <a href="javascript:void(0)">
            <div class="header_title_layout_pic"></div>
          </a>
        </div>
        <!-- 退出登录按钮 -->
        <!-- <el-button type="info" @click="logout" class="quiet">退出登录</el-button> -->
      </div>

      <!-- 导航栏部分 -->
      <el-container class="nav">
        <!-- 导航栏菜单 -->
        <el-menu
          :default-active="activeIndex"
          class="nav_menu"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#fff"
          background-color="#17233d"
        >
          <!-- 导航列表 -->
          <el-menu-item index="1">
            <a href="javascript:;">首页</a>
          </el-menu-item>
          <el-menu-item index="2">
            <a href="javascript:;">设备管理</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="javascript:;">预警信息</a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="javascript:;">预警规则</a>
          </el-menu-item>
          <el-menu-item index="5">
            <a href="javascript:;">物联空间</a>
          </el-menu-item>
          <el-menu-item index="6">
            <a href="javascript:;">项目管理</a>
          </el-menu-item>
          <el-menu-item index="7">
            <a href="javascript:;">授权管理</a>
          </el-menu-item>
          <el-menu-item index="8">
            <a href="javascript:;">日志管理</a>
          </el-menu-item>
          <el-menu-item index="9">
            <a href="javascript:;">项目信息</a>
          </el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-container>
    </el-header>

    <!-- Main部分 -->
    <el-container>
      <el-main>
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">鼠标悬浮时显示</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">鼠标悬浮时显示</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">鼠标悬浮时显示</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">鼠标悬浮时显示</el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  //生命周期函数
  created() {
    this.getMenuList();
  },

  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //获取所有的菜单
    //不知为什么获取不到  res为空
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
      console.log(res);
    }
  }
};
</script>

<style lang="less" scoped>
// home_container
.home_container {
  height: 100%;
}
// header部分
.el-header {
  padding: 0;
  background-color: #17233d;
  height: 100px !important;

  //header 的 title部分
  .header_title {
    height: 50px;
    color: #f0f8f8;
    width: 100%;
  }
  .header_title_logo {
    position: relative;
    width: 100px;
    height: 32px;
    float: left;
    // top: 15px;
    left: 70px;
    font-size: 36px;
  }
  .header_title_gps {
    width: 150px;
    height: 30px;
    line-height: 30px;
    float: left;
    position: relative;
    top: 10px;
    left: 100px;
    overflow: hidden;
  }
  .header_title_gps a {
    font-size: 14px;
    color: #fff;
  }
  // 个人登录中心退出登录
  .header_title_layout {
    float: right;
    position: relative;
    top: 15px;
    right: 20px;
  }
  .header_title_layout_username {
    padding-right: 5px;
  }
  .header_title_layout_pic {
    width: 32px;
    height: 32px;
    display: inline-block;
    background: #ccc;
    overflow: hidden;
    vertical-align: middle;
    border-radius: 16px;
  }
  .nav {
    margin-left: 130px;
    height: 50px;
  }
  .nav_menu {
    background-color: #17233d;
    height: 50px;
  }
  .nav_menu el-menu-item {
    width: 91px;
    height: 50px;
    font-size: 15px;
    color: rgba(239, 240, 242, 0.8);
  }
}
//main部分
.el-main {
  background-color: #edeeef;
}
</style>
