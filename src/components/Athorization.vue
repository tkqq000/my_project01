<template>
  <el-card shadow="hover">
    <!-- headBar 部分 -->
    <div class="headBar">
      <i class="el-icon-lock"></i>
      <p class="headBar_p">授权管理</p>
    </div>
    <!-- 搜索栏部分 searchBox -->
    <div class="searchBox">
      <div>
        <label>用户名</label>
        <el-input v-model="input" placeholder="请输入用户名" size="mini" class="searchBox_01"></el-input>
      </div>
      <!-- 创建新项目 -->
      <div class="device_summary_importProject">
        <el-button type="primary" size="mini" @click="getTableData">+ 授权用户</el-button>
      </div>
    </div>
    <!-- 表格table部分 -->
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="用户名称" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
        <el-table-column prop="mobile" label="联系方式"></el-table-column>
        <el-table-column prop="roleName" label="用户角色"></el-table-column>
        <el-table-column prop="operate" label="操作">
          <el-link :underline="false">
            <div class="deviceStatus_btn" @click="deleteUser($event)">删除</div>
          </el-link>
        </el-table-column>
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
          name: "",
          email: "",
          mobile: "",
          roleName: "",
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
    },
    async getTableData() {
      let result = await this.$axios.post("user/info");
      var list = result.data.data;
      // console.log(list);
      
      var obj = {};
      //如果接口给的数据是数组
      // for (let index = 0; index < list.length; index++) {
      //   console.log(that.list);
      //   const element = {};
      //   element =list[index];
      //   console.log(element);
      //   obj.username = element.username;
      //   this.tableData.push(obj);
      // }
      obj.name = list.name;
      obj.email = list.email;
      obj.mobile = list.mobile;
      obj.roleName = list.roleName;
      this.tableData.push(obj);
      delete this.tableData[0];
    },
    deleteUser(event){
      this.$message.error('还没做这个功能呢！');
      // delete event.target.parentNode;
      // this.$parent.remove();
    }
  },
  mounted() {
    this.getTableData();
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
// 操作按钮
.deviceStatus_btn {
  background: #e6f7ff;
  background-color: #fff;
  border: 1px solid #ed4014;
  color: #ed4014 !important;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
  width: 40px;
  height: 20px;
  line-height: 20px;
}
</style>