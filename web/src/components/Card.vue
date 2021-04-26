<template>
   <div class="card p-3 bg-white mt-3 ">
      <div class="card-header d-flex ai-center pt-2 pb-3">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="fs-xl flex-1 px-2">{{title}}</div>
        <i class="iconfont icon-menu"></i>
      </div>
      <div class="card-body pt-3">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:'新闻资讯',
      required:true,
    },
    icon:{
      type:String,
      required:true,
    }
  },
  data(){
    return {
      
    }
  }
}
</script>

<style lang="less">
@import "../assets/less/variables.less";
.card {
  .card-header {
    border-bottom: 1px solid @border-color;
  }
  border-bottom: 1px solid @border-color;
}
/* .card-header:after {
  content: "";
  position:absolute;
  bottom: 16.5%;
  left: 5%;
  display: block;
  width: 90%;
  height: 1px;
  background-color: #d4d9de;
  transform: scaleY(.5);
} */
</style>