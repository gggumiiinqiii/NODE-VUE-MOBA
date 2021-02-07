<template>
  <div>
    <h1>{{id?'编辑':'新建'}}广告位</h1>
                                              <!--.native是对一个组件绑定系统的原生事件，prevent是提交以后不刷新页面  -->
    <el-form label-width="120px"  @submit.native.prevent="save">
      <el-form-item label="名称" >
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button  @click="model.items.push({})"><i class="el-icon-plus"></i>添加广告</el-button>
        <el-row  type="flex" style="flex-wrap:wrap"> 
          <el-col :md="24" v-for="(item,i) in model.items" :key="i">
            <el-form-item label="图片" style="margin-top:0.5rem">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL+'/upload'"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="res=>item.image=res.url">
                <img v-if="item.image" :src="item.image" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="链接地址">
              <el-input v-model="item.url" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
              <!-- splice()修改器，删除数组元素(初始位置，删除的个数，插入的元素) -->
              <el-button style="margin-left:120px;margin-top:20px" size="small" type="danger" @click="model.items.splice(i,1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
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
        model:{
          name:'',
          items:[{
            image:'',
            url:''
          }]
        },
      }
    },
    methods:{
      // 新建一条记录的话用post
      //更新一条记录的话用put
      async save(){
        let res
        if(this.id) {
          res = await this.$http.put(`rest/ads/${this.id}`,this.model)
          console.log(res)
        }else {
          res = await this.$http.post('rest/ads',this.model)
          console.log(res)
        }
        this.$router.push('/ads/list')
        this.$message({
          type:'success',
          message:'保存成功了'
        })
      },
      async fetch(){
        const res = await this.$http.get(`rest/ads/${this.id}`)
        this.model = res.data
      },
      async fetchParents(){
        const res = await this.$http.get(`rest/ads`)
        this.parents = res.data
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
