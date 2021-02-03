<template>
  <div>
    <h1>{{id?'编辑':'新建'}}分类</h1>
                                              <!--.native是对一个组件绑定系统的原生事件，prevent是提交以后不刷新页面  -->
    <el-form label-width="120px"  @submit.native.prevent="save">
      <el-form-item label="上级分类" >
        <el-select v-model="model.parent">
          <!-- key是渲染作用,label是显示,value是具体的值 -->
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称" >
        <el-input v-model="model.name"></el-input>
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
        model:{},
        parents:[]
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
          res = await this.$http.put(`rest/categories/${this.id}`,this.model)
          console.log(res)
        }else {
          res = await this.$http.post('rest/categories',this.model)
          console.log(res)
        }
        this.$router.push('/categories/list')
        this.$message({
          type:'success',
          message:'保存成功了'
        })
      },
      async fetch(){
        const res = await this.$http.get(`rest/categories/${this.id}`)
        this.model = res.data
      },
      async fetchParents(){
        const res = await this.$http.get(`rest/categories`)
        this.parents = res.data
      }
    },
    created(){
      this.fetchParents()
      // 两个&&表示并且前面的条件满足,执行后面的方法/
      //如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；
      //如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值。
      this.id && this.fetch()
    }
  }
</script>
<style lang="stylus" scoped>

</style>