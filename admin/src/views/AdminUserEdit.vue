<template>
  <div>
    <h1>{{id?'编辑':'新建'}}分类</h1>
                                              <!--.native是对一个组件绑定系统的原生事件，prevent是提交以后不刷新页面  -->
    <el-form label-width="120px"  @submit.native.prevent="save">
      <el-form-item label="用户名" >
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    // 和路由尽可能的解耦
    props:{
      id:{}
    },
    data(){
      return {
        model:{},
      }
    },
    methods:{
      // 新建一条记录的话用post
      //更新一条记录的话用put
      async save(){
        let res
        if(this.id) {
          res = await this.$http.put(`rest/admin_users/${this.id}`,this.model)
          console.log(res)
        }else {                     //admin-users=>Admin-user -会被当成一个英文字母
                                    //admin_users=>AdminUser
          res = await this.$http.post('rest/admin_users',this.model)
          console.log(res)
        }
        this.$router.push('/admin_users/list')
        this.$message({
          type:'success',
          message:'保存成功了'
        })
      },
      async fetch(){
        const res = await this.$http.get(`rest/admin_users/${this.id}`)
        this.model = res.data
      },
    },
    created(){
      // 两个&&表示并且前面的条件满足,执行后面的方法/
      //如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；
      //如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值。
      this.id && this.fetch()
    }
  }
</script>
<style lang="stylus" scoped>

</style>