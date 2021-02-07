<template>
  <div>
    <h1>{{id?'编辑':'新建'}}物品</h1>
                                              <!--.native是对一个组件绑定系统的原生事件，prevent是提交以后不刷新页面  -->
    <el-form label-width="120px"  @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标" >
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL+'/upload'"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterupload">
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button  type="primary" native-type="submit">{{saveoredit}}</el-button>
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
        model:{}
      }
    },
    computed:{
      saveoredit(){
        if(this.id){
          return '编辑'
        }else {
          return '保存'
        }
      }
    },
    methods:{
      // 新建一条记录的话用post
      //更新一条记录的话用put
      async save(){
        let res
        if(this.id) {
          res = await this.$http.put(`rest/items/${this.id}`,this.model)
          console.log(res)
        }else {
          res = await this.$http.post('rest/items',this.model)
          console.log(res)
        }
        this.$router.push('/items/list')
        this.$message({
          type:'success',
          message:'保存成功了'
        })
      },
      async fetch(){
        const res = await this.$http.get(`rest/items/${this.id}`)
        this.model = res.data
      },
      afterupload(res){
        //vue提供的显示赋值
        this.$set(this.model,'icon',res.url)
        //这个虽然值会存在，但是因为一开始data没有定义所以无法显示
        // this.model.icon = res.url
      }
    },
    created(){
      // 两个&&表示并且前面的条件满足,执行后面的方法/
      //如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；
      //如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值。
      this.id && this.fetch()
    }
  }
</script>
<style >

</style>