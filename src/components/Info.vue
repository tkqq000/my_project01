<template>
  <el-card shadow="hover">
    <!-- headBar 部分 -->
    <div class="headBar">
      <i class="el-icon-info"></i>
      <p class="headBar_p">项目信息</p>
    </div>
    <!-- 主体main部分 -->
    <div class="main">
      <!-- 项目信息 -->
      <!-- 项目信息title -->
      <div class="main_title">
        <div></div>
        <p>项目资料</p>
      </div>
      <!-- 项目信息主体 -->
      <div class="main_first"></div>
      <!-- 接入信息 -->
      <!-- 接入信息title -->
      <div class="main_title">
        <div></div>
        <p>接入信息</p>
      </div>
      <!-- 接入信息主体 -->
      <div class="main_sencond"></div>
      <!-- 企业资料tile -->
      <div class="main_title">
        <div></div>
        <p>企业资料</p>
      </div>
      <!-- 企业资料主体 -->
      <div class="main_third"></div>
    </div>
  </el-card>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 最外层el-card样式
.el-card {
  height: 1170px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
// headBar 顶栏
.headBar {
  border-bottom: 1px solid #e8eaec;
}
.headBar_p {
  display: inline;
  font-weight: 700;
  color: rgb(32, 35, 50);
  font-size: 18px;
  margin-left: 5px;
}
//主体main部分
.main {
  position: absolute;
  position: relative;
  left: 17px;
  .main_first,
  .main_sencond,
  .main_third {
    width: 100%;
    background-color: #edeeef;
    border-radius: 2px;
  }
}
// 项目信息title
.main_title {
  div {
    background: blue;
    width: 2px;
    height: 13px;
    display: inline-block;
  }
  p {
    display: inline-block;
    margin-left: 6px;
  }
}

// 项目信息主体
.main_first {
  height: 410px;
}
// 接入信息主体
.main_sencond {
  height: 153px;
}
// 企业资料主体
.main_third {
  height: 350px;
}
</style>