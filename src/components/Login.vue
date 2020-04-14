<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/login_box_title.png" alt />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: "cxj",
        password: "123456"
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    // login(){
    //     this.$router.push("/Index");
    // }

    //当接口没有打开 => 打开以下
    login () {
        this.$router.push("/Index");
    }
    
    //当接口打开时 => 打开登录验证
    // async login() {
    //   let result = await this.$axios.post("user/login", {
    //     userName: this.loginForm.username,
    //     password: this.loginForm.password
    //   });

    //   if (result.data.errcode == 0) {
    //     this.$message.success(result.data.msg);
    //     this.$axios.defaults.headers["authorization"] = result.data.data.token;
    //     // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
    //     //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
    //     //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
    //     window.sessionStorage.setItem("token", result.data.data.token);
    //     let result1 = await this.$axios.post("user/info");
    //     console.log(result1.data.data);
    //     window.sessionStorage.setItem("username", result1.data.data.username);
    //     window.sessionStorage.setItem("name", result1.data.data.name);
    //     this.$router.push("/Index");
    //   } else if (result.data.errcode == 1) {
    //     this.$message.error(result.data.msg);
    //   }
    // }
  }
};

// this.$refs.loginFormRef.validate(async valid => {
//   if (!valid) return;
//   const { data: res } = await this.$http.post("login", this.loginForm);
//   if (res.meta.status !== 200) return this.$message.error("登录失败！");
//   this.$message.success("登录成功");
// 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
//   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
//   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
// window.sessionStorage.setItem("token", res.data.token);
// 2. 通过编程式导航跳转到后台主页，路由地址是 /index
// this.$router.push("/index");
</script>

<style lang="less" scoped>
.login_container {
  background: url(../assets/login_bgc.jpg);
  background-size: 100%;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
