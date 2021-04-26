<template>
  <div>
    <h1>{{id?'编辑':'新建'}}文章</h1>
                                              <!--.native是对一个组件绑定系统的原生事件，prevent是提交以后不刷新页面  -->
    <el-form label-width="120px"  @submit.native.prevent="save">
      <el-form-item label="所属分类" >
        <el-select v-model="model.categories" multiple>
          <!-- key是渲染作用,label是显示,value是具体的值 -->
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" >
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" >
        <vue-editor 
          v-model="model.content"
          useCustomImageHandler 
          @image-added="handleImageAdded"
        >
        </vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button  type="primary" native-type="submit">{{saveoredit}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// 解构方式
  import { VueEditor } from "vue2-editor";
  export default {
    // 和路由尽可能的解耦
    props:{
      id:{}
    },
    components:{
      VueEditor
    },
    data(){
      return {
        model:{
          title:'',
          content:'',
          categories:''
        },
        categories:[]
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
          res = await this.$http.put(`rest/articles/${this.id}`,this.model)
          console.log(res)
        }else {
          res = await this.$http.post('rest/articles',this.model)
          console.log(res)
        }
        this.$router.push('/articles/list')
        this.$message({
          type:'success',
          message:'保存成功了'
        })
      },
      async fetch(){
        const res = await this.$http.get(`rest/articles/${this.id}`)
        this.model = res.data
      },
      async fetchCategories(){
        const res = await this.$http.get(`rest/categories`)
        console.log(res)
        for(let i=0;i<res.data.length;i++) {
            this.categories.push(res.data[i])
        }
      },
      async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        //提交表单数据
        const formData = new FormData();
        formData.append("file", file);

        const res = await this.$http.post('upload',formData)
        Editor.insertEmbed(cursorLocation, "image", res.data.url);
        resetUploader();
      }
    },
    created(){
      this.fetchCategories()
      // 两个&&表示并且前面的条件满足,执行后面的方法/
      //如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；
      //如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值。
      this.id && this.fetch()
    }
  }
</script>
<style lang="stylus" scoped>

</style>