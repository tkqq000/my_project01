<template>
  <el-card shadow="hover">
    <!-- headBar 部分 -->
    <div class="headBar">
      <i class="el-icon-info"></i>
      <p class="headBar_p">项目信息</p>
    </div>
  </el-card>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 最外层el-card样式
.el-card {
  height: 500px;
  width: 100%;
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
</style>