<template>
  <div>
    <el-card shadow="hover">
      <!-- headBar 部分 -->
      <div class="headBar">
        <i class="el-icon-s-platform"></i>
        <p class="headBar_p">设备管理</p>
      </div>
      <!-- 设备编号 设备状态 设备名称 查询 -->
      <div class="searchBox">
        <div>
          设备编号
          <el-input v-model="input" placeholder="设备编号" class="searchBox_01" width="30px"></el-input>
        </div>
        <div>设备状态</div>
        <div>设备名称</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
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
// searchBox 搜索栏
.searchBox {
  padding: 20px;
  font-size: 12px;
}
.searchBox_01 {
  height: 32px!important;
  width: 100px;
}
.searchBox div {
  float: left;
  width: 230px;
  height: 32px;
}
</style>