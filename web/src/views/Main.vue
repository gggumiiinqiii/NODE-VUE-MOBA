<template>
  <div>
    <!-- 主页面的框架 -->
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
                                                    <!-- srcset根据不同的像素bi选取不同的图片 -->
      <img src="@/assets/images/logo.png" height="30" alt="logo" srcset="">
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary ">
        立即下载
      </button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav jc-around nav-inverse pb-1">
        <div class="nav-item " :class="{active:active===i}" v-for="(item,i) in path" :key="i"
        @click="change(i)">
          <router-link :to="`${item.path}`" class="nav-link" tag="div" >{{item.name}}</router-link>
        </div>
        <!-- <div class="nav-item">
          <router-link to="/strategy" class="nav-link" tag="div">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link  to="/match" class="nav-link" tag="div">赛事中心</router-link>
        </div> -->
      </div>
    </div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return {
      path:[{
        'path':'/',
        'name':'首页'
      },{
        'path':'/strategy',
        'name':'攻略中心'
      },{
        'path':'/match',
        'name':'赛事中心'
      },],
      active:0
    }
  },
  methods:{
    change(i){
      this.active=i;
    }
  }
}
</script>
<style lang="less">
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>