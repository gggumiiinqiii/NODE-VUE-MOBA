<template>
  <div >
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="@/assets/images/1.jpeg" alt="" srcset="">
      </swiper-slide>
      <swiper-slide>
        <img  class="w-100"  src="@/assets/images/2.jpeg" alt="" srcset="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100"  src="@/assets/images/3.jpeg" alt="" srcset="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 d-flex flex-wrap text-center pt-3 text-dark-1">
      <!-- 大的容器内部padding-top了一个3,内部元素maring-bottom了一个3 -->
      <div class="d-flex flex-wrap">
          <div class="nav-item mb-3" 
            v-for="n in 10" :key="n">
            <i class="sprite sprite-news"></i>
            <div class="py-2"> 
              爆料站
            </div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-story"></i>
            <div class="py-2"> 
              故事站
            </div>
          </div>
      </div>
      <div class="w-100 bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- <m-card icon="Menu" title="新闻资讯11">
      <div class="nav jc-between">
          <div class="nav-item active">
            <div class="nav-link ">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link ">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link ">公共</div>
          </div>
          <div class="nav-item">
            <div class="nav-link ">活动</div>
          </div>
          <div class="nav-item">
            <div class="nav-link ">赛事</div>
          </div>
        </div>
        <div class="pt-3">
          <swiper>
            <swiper-slide v-for="m in 5" :key="m">
              <div class="py-2" v-for="n in 5" :key="n">
                <span>[新闻]</span>
                <span>|</span>
                <span>王者荣耀×吉列联名款剃须刀锋芒全场</span>
                <span>04/23</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
    </m-card> -->

    <m-list-card icon="Menu" title="新闻资讯" :categories="newCats">
      <template #items="{category}">
        <router-link
        tag="div"
        :to="`/articles/${items._id}`" 
        class="py-2 fs-lg d-flex" v-for="(items,i) in category.newsList" :key="i">
          <span class="text-info">{{items.categoryname}}</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark text-ellipsis pr-2">{{items.title}}</span>
          <span class="time text-grey">{{items.createdAt|date}}</span>
        </router-link>
      </template>
    </m-list-card>
    <m-list-card icon="-superhero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0rem -0.5rem">
          <router-link 
          tag="div"
          :to="`/heroes/${items._id}`"
          class="p-2 text-center" v-for="(items,i) in category.heroesList" :key="i"
          style="width:20%">
            <img :src="items.avatar" alt="" class="w-100">
            <div>{{items.name}}</div>
          </router-link>
        </div>
        
      </template>
    </m-list-card>
    <!-- end of nav-icons -->
    <!-- <i class="iconfont icon-Menu fs-xl"></i>
    <i class="iconfont icon--superhero"></i> -->
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'Home',
  filters:{
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOptions: {

        pagination:{
          el: '.pagination-home'
        }
      },
      newCats:[],
      heroCats:[]
    }
  },
  computed:{
   
  },
  created(){

  },
  methods:{
    async fetchNewsCats(){
      const res = await this.$http.get('news/list')
      this.newCats = res.data
    },
    async fetchHeroCats(){
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    }
  },
  created(){
    this.fetchNewsCats()
    this.fetchHeroCats()
  }
}
</script>

<style lang="less">
@import '../assets/less/variables.less';
.title {
  display: inline-block;
  white-space: nowrap; 
  width: 100%; 
  overflow: hidden;
  text-overflow:ellipsis;
}
.pagination-home {
  opacity: 1;
  .swiper-pagination-bullet {
     border-radius: 0.1538rem;
    background-color: @white;
    &.swiper-pagination-bullet-active {
      background-color: @info;
    }
  }
}
.nav-icons {
  border-top: 1px solid @border-color;
  border-bottom: 1px solid @border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid @border-color;
    &:nth-child(4n+4){
       border-right: 1px solid transparent;
    }
  }
}
</style>