<template>
    <el-card shadow="hover">
      <!-- headBar 部分 -->
      <div class="headBar">
        <i class="el-icon-s-platform"></i>
        <p class="headBar_p">设备管理</p>
      </div>
      <!-- 设备编号 设备状态 设备名称 查询 -->
      <div class="searchBox">
        <div>
          <label>设备编号</label>
          <el-input v-model="input" placeholder="设备编号" size="mini" class="searchBox_01"></el-input>
        </div>
        <div>
          <label>设备状态</label>
          <el-select v-model="value" placeholder="请选择" size="mini" class="searchBox_01">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <label>设备名称</label>
          <el-input v-model="input2" placeholder="请输入设备名称" size="mini" class="searchBox_01"></el-input>
        </div>
        <div>
          <el-button type="primary" size="mini">查询</el-button>
        </div>
      </div>
      <!-- 设备概况栏 -->
      <!-- device_total -->
      <div class="device_summary">
        <div class="device_summary_total">
          <el-link :underline="false">
            <div class="device_summary_total_dot"></div>
            <span class="device_summary_total_inner">共有1个设备</span>
          </el-link>
        </div>
        <!-- 在线 离线 故障 device_summary_-->
        <el-link :underline="false">
          <div class="device_summary_online">在线设备 1 个</div>
        </el-link>
        <el-link :underline="false">
          <div class="device_summary_offline">离线设备 0 个</div>
        </el-link>
        <el-link :underline="false">
          <div class="device_summary_break">故障设备 0 个</div>
        </el-link>
        <!-- 批量导入 添加设备 device_summary_-->
        <div class="device_summary_importDevice">
          <el-button type="primary" size="mini">+ 添加设备</el-button>
        </div>
        <div class="device_summary_importPack">
          <el-button type="primary" size="mini">+ 批量导入</el-button>
        </div>
      </div>
      <!-- table部分 -->
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="deviceName" label="名称" width="180"></el-table-column>
          <el-table-column prop="deviceId" label="编号" width="180"></el-table-column>
          <el-table-column prop="deviceClass" label="类型"></el-table-column>
          <el-table-column prop="installPosition" label="安装位置"></el-table-column>
          <el-table-column prop="deviceStatus" label="状态">
            <el-link :underline="false">
              <div class="deviceStatus_btn">设备在线</div>
            </el-link>
          </el-table-column>
          <el-table-column prop="deviceOperate" label="操作">
            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
            <el-button type="text" size="small">更多</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- page翻页 -->
      <div class="page">
        <span class="demonstration"></span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
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
      // searchBox数据
      options: [
        {
          value: "选项1",
          label: "在线"
        },
        {
          value: "选项2",
          label: "故障"
        },
        {
          value: "选项3",
          label: "离线"
        }
      ],
      // searchBox数据
      value: "",
      input: "",
      input2: "",
      // table数据
      tableData: [
        {
          deviceName: "转移设备",
          deviceId: "7501567",
          deviceClass: "扬尘检测仪",
          installPosition: ""
        }
      ],
      // page 分页
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  // methods
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
// searchBox 搜索栏
.searchBox {
  padding: 20px;
  font-size: 12px;
}
.searchBox_01 {
  width: 170px !important;
  margin-left: 5px;
}
.searchBox div {
  display: inline-block;
  width: 250px;
  height: 32px;
  position: relative;
}
.searchBox div:nth-child(3) {
  width: 230px;
}
// 设备概况栏
// device_total
.device_summary {
  height: 26px;
  line-height: 26px;
  padding: 0 12px;
}
.device_summary_total {
  border: 1px solid #e8eaec !important;
  width: 110px;
  border-radius: 4px;
  line-height: 26px;
  display: inline-block;
  .el-link {
    font-size: 12px;
  }
  .device_summary_total_inner {
    margin-left: 8px;
  }
}
.device_summary_total_dot {
  margin-left: 8px;
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #2d8cf0;
  border-radius: 50%;
}
// 在线 离线 故障
.device_summary_online,
.device_summary_offline,
.device_summary_break {
  width: 90px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 5px;
}
// 批量添加 添加设备
.device_summary_importPack {
  float: right;
}
.device_summary_importDevice {
  float: right;
  margin-left: 10px;
}
.device_summary_online {
  background: #e6f7ff;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  color: #1890ff !important;
  text-align: center;
}
.device_summary_offline {
  background: #ccc;
  background-color: #ccc;
  border: 1px solid lightgray;
  color: #fff !important;
  text-align: center;
}
.device_summary_break {
  background: #ccc;
  background-color: #fff1f0;
  border: 1px solid #ffa39e;
  color: #f5222d !important;
  text-align: center;
}
// table 部分
.table {
  font-size: 12px;
  border: 1px solid #e8eaec;
  margin-left: 12px;
  margin-top: 10px;
}
// 操作按钮
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