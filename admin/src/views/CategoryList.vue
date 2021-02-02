<template>
  <div>
    <p>分类列表</p>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="editClick(scope.row._id)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        items:[]
      }
    },
    methods:{
      async fetch() {
        const res = await this.$http.get('categories')
        this.items = res.data
      },
      editClick(id) {
        this.$router.push(`/categories/edit/${id}`)
      }
    },
    created(){
      this.fetch()
    }
  }
</script>
<style lang="scss" scoped>

</style>