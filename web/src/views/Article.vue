<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-1" style="border-bottom:1px solid #d4d4d5">
      <div class="iconfont icon-back text-blue"> </div>
      <div class="flex-1 text-ellipsis text-blue pl-2">{{model.title}}</div>
      <div class="text-grey fs-xs">{{model.createdAt|date}}</div>
    </div>
    <div v-html="model.content" class="px-2 content fs-lg"></div>
    <div class="px-3 py-2" style="border-top:3px solid #d4d4d5">
      <div class="d-flex ai-center pb-2" >
        <i class="iconfont icon-Menu"></i>
        <div class="text-blue fs-lg ml-2">相关资讯</div>
      </div>
      <router-link
      class="text-ellipsis mt-2"
      tag="div"
      :to="`/articles/${item._id}`"
      v-for="item in model.related"
      :key="item._id">
        {{item.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters:{
    date(val){
      return dayjs(val).format('YYYY/MM/DD')
    }
  },
  props:{
    id:{required:true}
  },
  data(){
    return {
      model:null
    }
  },
  methods:{
    async fetchArticles(){
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  watch:{
    id:'fetchArticles'
    //监听id变化执行这个方法
    /*
    id(){
      this.fetchArticles()
    }
    */
  },
  created(){
    this.fetchArticles()
  }
}
</script>

<style lang="less">
.page-article {
  .content {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>