<template>
  <el-card shadow="hover">
    <!-- headBar 部分 -->
    <div class="headBar">
      <i class="el-icon-s-tools"></i>
      <p class="headBar_p">项目管理</p>
    </div>
    <!-- 搜索栏部分 searchBox -->
    <div class="searchBox">
      <div>
        <label>项目名称</label>
        <el-input v-model="input" placeholder="项目名称" size="mini" class="searchBox_01"></el-input>
      </div>
      <div>
        <el-button type="primary" size="mini">查询</el-button>
      </div>
      <!-- 创建新项目 -->
      <div class="device_summary_importProject">
        <el-button type="primary" size="mini">+ 创建新项目</el-button>
      </div>
    </div>
    <!-- 表格table部分 -->
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="P_name" label="项目名称" width="180"></el-table-column>
        <el-table-column prop="P_positon" label="项目地址" width="180"></el-table-column>
        <el-table-column prop="P_scale" label="项目规模"></el-table-column>
        <el-table-column prop="P_price" label="项目造价"></el-table-column>
        <el-table-column prop="P_status" label="项目状态"></el-table-column>
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
          P_name: "",
          P_positon: "",
          P_scale: "",
          P_price: "",
          P_status:"",
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
  .device_summary_importProject {
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