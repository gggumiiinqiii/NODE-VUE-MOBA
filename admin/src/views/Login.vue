<template>
  <div class="login-container">
   <el-card header="请先登录" class="login-card">
     <!-- 监听原生事件，阻止表单不要跳转页面 -->
     <el-form @submit.native.prevent="login">
       <el-form-item label="用户名">
         <el-input v-model="model.username"></el-input>
       </el-form-item>
        <el-form-item label="密码">
         <el-input type="password" v-model="model.password"></el-input>
       </el-form-item>
       <el-form-item>
         <el-button style="margin-left:40%" type="primary" native-type="submit">登录</el-button>
       </el-form-item>
     </el-form>
   </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      model:{

      }
    }
  },
  methods:{
    async login(){
      // 得到token
      const res = await this.$http.post('login',this.model)
      // 这里的token分为header(头部),payload(载荷),signature(签证)
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type:'success',
        message:"登陆成功"
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-card {
  width: 25rem;
  margin: 10rem auto;
}
</style>