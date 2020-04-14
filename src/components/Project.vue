<template>
  <div class="main">
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
          <el-table-column prop="name" label="项目名称" width="300"></el-table-column>
          <el-table-column prop="address" label="项目地址" width="300"></el-table-column>
          <el-table-column prop="scale" label="项目规模"></el-table-column>
          <el-table-column prop="cost" label="项目造价"></el-table-column>
          <el-table-column prop="status" label="项目状态"></el-table-column>
          <el-table-column prop="operate" label="操作" width="150">
            <el-link :underline="false">
              <div class="operate_btn">切换项目</div>
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
          :page-size="pageSize"
          :total="total"
          :limit="10"
          layout="total,prev, pager, next,sizes"
        ></el-pagination>
      </div>
    </el-card>
  </div>
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
          address: "",
          scale: "",
          cost: "",
          status: "",
          operate: ""
        }
      ],
      // page 分页
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  },
  methods: {
    // 分页方法
    handleSizeChange(val) {
      this.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData();
    },
    async getData() {

      //设置请求参数offset（请求起始位置） 
      //如果当前页为第一页，则从0开始请求，如果当前页不为1，则从 （currentPage - 1） * currentSize 开始请求
      let offset = 0;
      if(this.currentPage == 1){
        offset = 0;
      }else{
        offset = (this.currentPage - 1) * this.pageSize;
      }

      //发起请求填充数据
      // let result = await this.$axios.post("user/projects", {
      //   userName: window.sessionStorage.getItem("username"),
      //   offset:offset, // 查看起始位置
      //   limit: this.pageSize // 每一页大小
      // });

      //发起请求填充数据
      let result = await this.$axios.post("user/projects", {
        userName: window.sessionStorage.getItem("username"),
        offset:0, // 查看起始位置
        limit: 999 // 每一页大小
      });
      console.log(result.data);


      //获取服务器数据总数，直接从result中的total参数中获取即可
      this.total = result.data.data.total;
      //获取请求结果中的数据
      let list = result.data.data.items;
      
      //清空数组（每次点击变化，需将之前的数据清空）
      this.tableData.length = 0;
      //将请求的数据填充的表格中
      for (let index = 0; index < list.length; index++) {
        const element = {};
        element.name = list[index].name;
        element.address = list[index].address;
        element.cost = list[index].cost;
        element.status = list[index].status;
        this.tableData.push(element);
        delete this.tableData[0];
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
.main {
  position: absolute;
  position: relative;
  //去掉滚动条
  // overflow: hidden;
}
.el-container {
  // overflow: hidden;
  position: relative;
}
// 最外层el-card样式
.el-card {
  height: 100%;
  width: 100%;
  // overflow: hidden;
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
//操作按钮
.operate_btn {
  background: #e6f7ff;
  background-color: #fff;
  border: 1px solid #19be6b;
  color: #19be6b !important;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
  width: 65px;
  height: 23px;
  line-height: 20px;
}
// page 翻页
.page {
  margin-top: 5px;
  text-align: center;
}
</style>