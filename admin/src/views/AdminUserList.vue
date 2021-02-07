<template>
  <div>
    <p>分类列表</p>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="password" label="密码" ></el-table-column>
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
        const res = await this.$http.get('rest/admin_users')
        this.items = res.data
      },
      editClick(id) {
        this.$router.push(`/admin_users/edit/${id}`)
      },
      async deleteClick(row) {
        this.$confirm(`否确定要删除分类"${row.username}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          const res = await this.$http.delete(`rest/admin_users/${row._id}`)
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