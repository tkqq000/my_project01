<template lang="">
    <div>
        <el-row :gutter="12">
            <el-card shadow="hover" class="el-card_01 box">
                <div class="el-card_01_greeting">
                  <h2>{{name}} ,你好！</h2>
                </div>
                <div>
                  <h1>设备预警信息</h1>
                </div>
            </el-card>
      
            <el-card shadow="hover" class="el-card_02 box">
                <div>
                     <i class="el-icon-time"></i>
                     <p>24小时设备在线统计</p>
                </div>
            </el-card>
            <!-- el-card_03 el-card_04 布局颠倒 -->
            <el-card shadow="hover" class="el-card_03">
                <div>
                     <img class="el-card_03_img" src="../assets/el-card_03_img.png">
                </div>
            </el-card>
            <el-card shadow="hover" class="el-card_04">
              <p>异常设备</p>
            </el-card>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {},
  mounted() {
    this.name = window.sessionStorage.getItem("name");
  }
};
</script>

<style lang="less" scoped>
// 整体 main
// 主页 4张 card
// 调整位置布局
// 第一张
.el-card_01 {
  float: left;
  position: relative;
  height: 500px;
  width: 33%;
  margin-bottom: 30px;
  margin: 10px;
}
.el-card_01_greeting {
  margin-top: 14px;
  margin-bottom: 20px;
  border-bottom: 1px dashed #ccc;
}
// 第二张
.el-card_02 {
  width: 65%;
  height: 250px;
  margin-bottom: 30px;
  margin: 10px;
}
.el-card_02 div {
  margin-top: 14px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.el-card_02 p {
  display: inline;
  font-weight: 700;
}
// 第三张和第四张
.el-card_03,
.el-card_04 {
  float: right;
  width: 32%;
  height: 238px;
}
.el-card_03 {
  margin-right: 5px;
  .el-card_03_img {
    width: 80%;
  }
}
// 第四张
.el-card_04 {
  margin-right: 10px;
}
.el-card_04 p {
  font-weight: 700;
  color: rgb(32, 35, 50);
  font-size: 18px;
}
</style>