<template>
  <el-card class="el-card__body" shadow="hover">
    <!-- headBar部分 -->
    <div class="headBar">
      <i class="el-icon-warning"></i>
      <p class="headBar_p">预警规则</p>
    </div>
    <!-- 搜索栏部分 -->
    <div class="search_box">
      <!--状态 -->
      <el-checkbox-group v-model="checkList" size="mini">
        <label class="search_box_title">状态：</label>
        <el-checkbox label="全部"></el-checkbox>
        <el-checkbox label="待处理"></el-checkbox>
        <el-checkbox label="处理中"></el-checkbox>
        <el-checkbox label="已处理"></el-checkbox>
      </el-checkbox-group>
      <!-- 警告级别 -->
      <el-checkbox-group v-model="checkList" size="mini">
        <label class="search_box_title">警告级别：</label>
        <el-checkbox label="一般"></el-checkbox>
        <el-checkbox label="紧急"></el-checkbox>
        <el-checkbox label="严重"></el-checkbox>
        <el-checkbox label="致命"></el-checkbox>
      </el-checkbox-group>
      <!-- 业务类型 -->
      <el-checkbox-group v-model="checkList" size="mini">
        <label class="search_box_title">业务类型：</label>
        <el-checkbox label="传感器"></el-checkbox>
        <el-checkbox label="智能门禁"></el-checkbox>
        <el-checkbox label="摄像头"></el-checkbox>
      </el-checkbox-group>
      <!-- 时间选择 -->
      <div class="block">
        <label class="search_box_title">时间：</label>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="mini"></el-date-picker>
      </div>
      <!-- </div> -->
    </div>
    <!-- 警告概述 alert_summary -->
    <div class="alert_sumary">
      <el-link :underline="false" class="alert_total">
        <div class="alert_total_dot"></div>
        <span class="alert_total_inner">共有0个设备</span>
      </el-link>
      <!-- 警告概述 详情 -->
      <el-link :underline="false" class="alert_deadly">
        <span class="alert_deadly_inner">致命：0</span>
      </el-link>
      <el-link :underline="false" class="alert_serious">
        <span class="alert_serious_inner">严重：0</span>
      </el-link>
      <el-link :underline="false" class="alert_urgency">
        <span class="alert_urgency_inner">紧急：0</span>
      </el-link>
      <el-link :underline="false" class="alert_normal">
        <span class="alert_normal_inner">一般：0</span>
      </el-link>
      <el-link :underline="false" class="alert_warn">
        <span class="alert_warn_inner">提示：0</span>
      </el-link>
    </div>
    <!-- 表格table部分 -->
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="deviceID" label="告警设备编号" width="180"></el-table-column>
        <el-table-column prop="deviceClass" label="主类型" width="180"></el-table-column>
        <el-table-column prop="deviceSecondClass" label="次类型"></el-table-column>
        <el-table-column prop="deviceDescription" label="描述"></el-table-column>
        <el-table-column prop="deviceRank" label="级别"></el-table-column>
        <el-table-column prop="deviceStatus" label="状态"></el-table-column>
        <el-table-column prop="operateTime" label="时间"></el-table-column>
        <el-table-column prop="operateUser" label="处理人"></el-table-column>
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
      // searchBox搜索框 复选框
      checkList: ["选中且禁用", "复选框 A"],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      // table数据
      tableData: [
        {
          deviceID: "",
          deviceClass: "",
          deviceSecondClass: "",
          deviceDescription: "",
          deviceRank: "",
          deviceStatus: "",
          operateTime: "",
          operateUser: ""
        }
      ],
      // page 分页
      currentPage: 1,
      //日期data
      value1: "",
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
  padding: 0 !important;
}
// el-card 无法去除内边距
// headBar 部分
.headBar {
  border-bottom: 1px solid #e8eaec;
  .headBar_p {
    display: inline;
    font-weight: 700;
    color: rgb(32, 35, 50);
    font-size: 18px;
    margin-left: 5px;
  }
}
// 搜索栏部分 searchbox
.search_box {
  margin-top: 15px;
  .el-checkbox {
    padding: 5px 10px 10px 10px;
  }
  .el-checkbox-group {
    position: relative;
  }
  .search_box_title {
    width: 80px;
    height: 30px;
    text-align: right;
    float: left;
    font-size: 14px;
    color: #515a6e;
    line-height: 30px;
  }
  // searchBox日期选择器
  .el-date-editor {
    padding: 0px 10px 10px 10px !important;
  }
}
// 警告概述
// alert_total 总数
.alert_total {
  font-size: 12px;
  border: 1px solid #e8eaec !important;
  width: 110px;
  border-radius: 4px;
  line-height: 26px;
  display: inline-block;
  .alert_total_inner {
    margin-left: 8px;
  }
  .alert_total_dot {
    width: 12px;
    height: 12px;
    margin-left: 8px;
    display: inline-block;
    background-color: #2d8cf0;
    border-radius: 50%;
  }
}
//警告概述详情
.alert_deadly,
.alert_serious,
.alert_urgency,
.alert_normal,
.alert_warn {
  font-size: 12px;
  border: 1px solid #e8eaec !important;
  width: 44px;
  height: 22px;
  border-radius: 4px;
  line-height: 22px;
  display: inline-block;
  margin: 2px 2px 2px 4px;
  padding: 0 8px;
  .alert_deadly_inner,
  .alert_serious_inner,
  .alert_urgency_inner,
  .alert_normal_inner,
  .alert_warn_inner {
    color: #fff;
    text-align: center;
  }
}
.alert_deadly {
  background-color: #ed4014;
}
.alert_serious {
  background-color: rgb(255, 102, 0);
}
.alert_urgency {
  background-color: rgb(255, 102, 102);
}
.alert_normal {
  background-color: rgb(255, 153, 0);
}
.alert_warn {
  background-color: rgb(255, 204, 0);
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