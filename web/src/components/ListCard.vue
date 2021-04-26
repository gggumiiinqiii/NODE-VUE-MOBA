<template>
    <m-card :icon="icon" :title="title">
      <div class="nav jc-between">
          <div class="nav-item" :class="{active:active===i}"
          v-for="(category,i) in categories" :key="i" @click="changeactive(i)"
          >
            <div class="nav-link ">{{category.name}}</div>
          </div>
        </div>
        <div class="pt-3">
          <swiper ref="list"
          @slide-change="()=> active=$refs.list.swiper.realIndex">
            <swiper-slide v-for="(category,i) in categories" :key="i">
              <!-- 作用域 -->
              <slot name="items" :category="category"></slot>
            </swiper-slide>
          </swiper>
        </div>
    </m-card>
</template>

<script>
export default {
  data(){
    return{
      active:0
    }
  },
  props:{
    icon:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    categories:{
      type:Array,
      required:true
    }
  },
 mounted(){
   console.log(this.active)
 },
 methods:{
   changeactive(i){
     this.$refs.list.swiper.slideTo(i)
   }
 }
}
</script>

<style>

</style>