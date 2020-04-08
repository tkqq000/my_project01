<template>
  <el-card shadow="hover">
    <!-- headBar 部分 -->
    <div class="headBar">
      <i class="el-icon-warning"></i>
      <p class="headBar_p">预警规则</p>
    </div>
    <!-- 搜索栏部分 searchBox -->
    <div class="searchBox">
      <div>
        <label>规则名称</label>
        <el-input v-model="input" placeholder="规则名称" size="mini" class="searchBox_01"></el-input>
      </div>
      <div>
        <el-button type="primary" size="mini">查询</el-button>
      </div>
      <!-- 添加设备 -->
      <div class="device_summary_importRule">
        <el-button type="primary" size="mini">+ 添加规则</el-button>
      </div>
    </div>
    <!-- 表格table部分 -->
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="ruleID" label="规则编号" width="180"></el-table-column>
        <el-table-column prop="ruleName" label="规则名称" width="180"></el-table-column>
        <el-table-column prop="ruleClass" label="规则分类"></el-table-column>
        <el-table-column prop="deviceClass" label="设备类型"></el-table-column>
        <el-table-column prop="operate" label="操作"></el-table-column>
      </el-table>
    </div>
    <!-- page翻页 -->
    <div class="page">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="prev, pager, next,sizes"
        :total="1"
      ></el-pagination>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      // searchBox
      input: "",
      // table数据
      tableData: [
        {
          ruleID: "",
          ruleName: "",
          ruleClass: "",
          deviceClass: "",
          operate: ""
        }
      ],
      // page 分页
      currentPage: 1,
      value1: "",
      value2: ""
    };
  },
  methods: {
    // 分页方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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
// searchBox 搜索栏部分
.searchBox {
  padding: 20px;
  font-size: 12px;
  .searchBox_01 {
    width: 170px !important;
    margin-left: 5px;
  }
  .device_summary_importRule {
    float: right;
    width: 90px;
  }
}
.searchBox div {
  display: inline-block;
  width: 230px;
  height: 32px;
  // position: relative;
}
// table 部分
.table {
  font-size: 12px;
  border: 1px solid #e8eaec;
  margin-top: 10px;
}
.deviceStatus_btn {
  background: #e6f7ff;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  color: #1890ff !important;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
  width: 70px;
  height: 20px;
  line-height: 20px;
}
// page 翻页
.page {
  margin-top: 5px;
  text-align: center;
}
</style>