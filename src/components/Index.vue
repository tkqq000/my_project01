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
        <!-- 个人中心 -->
        <div class="header_title_personal">
          <!-- 用户名 -->
          <span class="header_title_personal_username">{{name}}</span>
          <!-- 用户头像 下拉菜单 -->
          <!-- <a href="javascript:void(0)"> -->

          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <div class="header_title_personal_pic"></div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">个人中心</el-dropdown-item>
                <el-dropdown-item command="b">修改密码</el-dropdown-item>
                <el-dropdown-item command="c">退出登录</el-dropdown-item>
              </el-dropdown-menu>
              <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
            </span>
          </el-dropdown>

          <!-- <div class="header_title_personal_pic"></div> -->
          <!-- </a> -->
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
          text-color="#909399"
          active-text-color="#fff"
          background-color="#17233d"
          router
        >
          <!-- 导航列表 -->
          <el-menu-item index="1" icon="el-icon-search" route="/home">
            <i class="el-icon-s-home"></i>
            <!-- <a href="javascript:;">首页</!-->
            首页
          </el-menu-item>
          <el-menu-item index="2" route="/device">
            <i class="el-icon-s-platform"></i>
            <!-- <a href="javascript:;">设备管理</a> -->
            设备管理
          </el-menu-item>
          <el-menu-item index="3" route="/alert">
            <i class="el-icon-warning-outline"></i>
            <!-- <a href="javascript:;">预警信息</a> -->
            预警信息
          </el-menu-item>
          <el-menu-item index="4" route="/rules">
            <i class="el-icon-warning-outline"></i>
            <!-- <a href="javascript:;">预警规则</a> -->
            预警规则
          </el-menu-item>
          <el-menu-item index="5" route="/wulian">
            <i class="el-icon-map-location"></i>
            <!-- <a href="javascript:;">物联空间</a> -->
            物联空间
          </el-menu-item>
          <el-menu-item index="6" route="/project">
            <i class="el-icon-s-data"></i>
            <!-- <a href="javascript:;">项目管理</a> -->
            项目管理
          </el-menu-item>
          <el-menu-item index="7" route="/athorization">
            <i class="el-icon-lock"></i>
            <!-- <a href="javascript:;">授权管理</a> -->
            授权管理
          </el-menu-item>
          <el-menu-item index="8" route="/log">
            <i class="el-icon-reading"></i>
            <!-- <a href="javascript:;">日志管理</a> -->
            日志管理
          </el-menu-item>
          <el-menu-item index="9" route="/info">
            <i class="el-icon-info"></i>
            <!-- <a href="javascript:;">项目信息</a> -->
            项目信息
          </el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-container>
    </el-header>

    <!-- Main部分 -->
    <el-container>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
        <!-- 版权信息 -->
        <div class="copyright">2018-2022 © We do Internet of Things</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      name: ""
    };
  },
  //生命周期函数
  // created() {
  //   this.getMenuList();
  // },

  methods: {
    async logout() {
      // window.sessionStorage.clear();
      let result = await this.$axios.post("user/logout");
      // console.log(result.data);
      
      if(result.data.errcode == 0 ){
        this.$message.success(result.data.msg);
      }else{
        this.$message.error(result.data.msg)
      }
      this.$router.push("/login");
      window.sessionStorage.clear();
    },
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    handleCommand(command) {
      if(command == 'c'){
        this.logout();
      }
    }

    //获取所有的菜单
    //不知为什么获取不到  res为空
    // async getMenuList() {
    //   const { data: res } = await this.$http.get("menus");
    //   if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
    //   this.menulist = res.data;
    //   console.log(res);
    // }
  },
  mounted() {
    this.name = window.sessionStorage.getItem("name");
  }
};
</script>

<style lang="less" scoped>
// home_container
.home_container {
  height: 100%;
  //挤出滚动条
  width: 100%;
  //隐藏外面的滚动条
  // overflow: hidden;

}
// header部分
.el-header {
  padding: 0;
  background-color: #17233d;
  height: 100px !important;
  min-width: 1400px;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1;

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
  .header_title_personal {
    // float: right;
    position: relative;
    top: 15px;
    right: 20px;
  }
  .header_title_personal_username {
    position: absolute;
    right: 50px;
    // display: inline;
  }
  .el-dropdown {
    position: absolute;
    right: 14px;
    top: -5px;
    cursor: pointer;
  }
  .header_title_personal_pic {
    // float: right;
    right: 50px;
    width: 32px;
    height: 32px;
    display: inline-block;
    background: #ccc;
    overflow: hidden;
    vertical-align: middle;
    border-radius: 16px;
  }
  // 导航部分
  .nav {
    margin-left: 130px;
    height: 50px;
  }
  .nav_menu {
    background-color: #17233d;
    height: 50px;
  }
  .el-menu-item {
    height: 50px;
    font-size: 15px;
    color: rgba(239, 240, 242, 0.8);
  }
}
//main部分
.el-main {
  background-color: #edeeef;
  margin-top: 100px;
}
// 版权信息
.copyright {
  text-align: center;
  padding: 24px 50px;
  font-size: 14px;
  color: #515a6e;
}
</style>
