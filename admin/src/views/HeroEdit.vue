<template>
  <div>
    <h1>{{id?'编辑':'新建'}}英雄</h1>
                                              <!--.native是对一个组件绑定系统的原生事件，prevent是提交以后不刷新页面  -->
    <el-form label-width="120px"  @submit.native.prevent="save">
      <el-tabs value="skills" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像" >
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL+'/upload'"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="afterupload">
              <img v-if="model.avator" :src="model.avator" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option 
              v-for="item of categories"
              :key="item._id"
              :label="item.name"
              :value="item._id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate :max="9" show-score style="margin-top:0.6rem" v-model="model.scores.difficult"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate :max="9" show-score style="margin-top:0.6rem" v-model="model.scores.skill"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate :max="9" show-score style="margin-top:0.6rem" v-model="model.scores.attack"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate :max="9" show-score style="margin-top:0.6rem" v-model="model.scores.survive"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.sitems" multiple>
              <el-option 
              v-for="item of items"
              :key="item._id"
              :label="item.name"
              :value="item._id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.nitems" multiple>
              <el-option 
              v-for="item of items"
              :key="item._id"
              :label="item.name"
              :value="item._id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对战技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战技巧">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能信息" name="skills">
          <el-button @click="model.skills.push({})"><i class="el-icon-plus"></i>添加技能</el-button>
          <el-row  type="flex" style="flex-wrap:wrap"> 
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL+'/upload'"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="res=>item.icon=res.url">
                  <img v-if="item.icon" :src="item.icon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="item.tips" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <!-- splice()修改器，删除数组元素 -->
                <el-button size="small" type="danger" @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem">
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
        categories:[],
        items:[],
        model:{
          name:'',
          avatar:'',
          scores:{
            difficult:5,
            skill:5,
            attack:5,
            survive:2
          },
          sitems:[],
          nitems:[],
          usageTips:'',
          battleTips:'',
          teamTips:"",
          skills:[{
            icon:'',
            name:'',
            description:'',
            tips:''
          }]
        }
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
      afterupload(res){
        //vue提供的显示赋值
        //this.$set(this.model,'avator',res.url)
        //这个虽然值会存在，但是因为一开始data没有定义所以无法显示
         this.model.avator = res.url
      },
      // 新建一条记录的话用post
      //更新一条记录的话用put
      async save(){
        let res
        if(this.id) {
          res = await this.$http.put(`rest/heroes/${this.id}`,this.model)
          console.log(res)
        }else {
          res = await this.$http.post('rest/heroes',this.model)
          console.log(res)
        }
        this.$router.push('/heroes/list')
        this.$message({
          type:'success',
          message:'保存成功了'
        })
      },
      async fetch(){
        const res = await this.$http.get(`rest/heroes/${this.id}`)
        // Object.assign({})第一个为为目标对象，后续都为源对象赋值到第一个目标对象当中
        this.model = Object.assign({},this.model,res.data)
        console.log(this.model)
      },
      async fetchCategories(){
        const res = await this.$http.get(`rest/categories`)
        for(let i=0;i<res.data.length;i++) {
          if(res.data[i].parent !== undefined) {
            if(res.data[i].parent._id==='60190b86dcc1600b7c9cfd8d') {
              this.categories.push(res.data[i])
            }
          }
        }
       // this.categories = res.data
      },
      async fetchItems(){
        const res = await this.$http.get(`rest/items`)
        this.items = res.data
      }
    },
    created(){
      this.fetchItems()
      this.fetchCategories()
      // 两个&&表示并且前面的条件满足,执行后面的方法/
      //如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；
      //如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值。
      this.id && this.fetch()
    }
  }
</script>
<style >
  
</style>