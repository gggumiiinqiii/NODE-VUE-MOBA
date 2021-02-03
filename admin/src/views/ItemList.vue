<template>
  <div>
    <p>物品列表</p>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="icon" label="图标">
        <!-- <template slot-scope="scope">可以自定一编辑内容 -->
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="height:3rem">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="物品名称"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="editClick(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
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
        const res = await this.$http.get('rest/items')
        this.items = res.data
      },
      editClick(id) {
        this.$router.push(`/items/edit/${id}`)
      },
      async deleteClick(row) {
        this.$confirm(`否确定要删除分类"${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          const res = await this.$http.delete(`rest/items/${row._id}`)
          if(res.status === 200) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
          }else {
              this.$message({
                type: 'success',
                message: '删除失败!'
              });
          }
          this.fetch()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    created(){
      this.fetch()
    }
  }
</script>
<style lang="scss" scoped>

</style>