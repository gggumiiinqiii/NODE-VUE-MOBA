<template>
  <div class="pg-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
                                                    <!-- srcset根据不同的像素bi选取不同的图片 -->
      <img src="@/assets/images/logo.png" height="30" alt="logo" srcset="">
       <div class="text-white pl-2">王者荣耀</div>
      <div class="px-2 flex-1">
        <div class="text-white">攻略站</div>
      </div>
     <router-link to="/" tag='div' class="text-white">更多英雄 &gt;</router-link>
    </div>
    <div  class="top" :style="{background:`url(${model.banner})` }">
     <div class="info text-white p-3 d-flex flex-column jc-end h-100">
       <div class="fs-xs">{{model.title}}</div>
       <h2 class="mt-2 mb-2">{{model.name}}</h2>
       <div class="fs-xxs">{{model.categories.map(v=>v.name).join('/')}}</div>
       <div class="d-flex jc-between">
          <div class="scores d-flex ai-center pt-1" v-if="model.scores">
            <span>难度</span>
            <span class="badeg bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badeg bg-blue-1">{{model.scores.skill}}</span>
            <span>攻击</span>
            <span class="badeg bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badeg bg-grey">{{model.scores.survive}}</span>
          </div>
          <div class="skin fs-xs mt-2">
            皮肤2 &gt;
          </div>
       </div>
     </div>
    </div>
    <!-- end of top -->
    <div>
      <div class="bg-white px-3">
        <div class="nav d-flex jc-around pt-3 pb-2" style="border-bottom:1px solid #d4d9de">
          <div class="nav-item " :class="{active:active===i}"
          v-for="(item,i) in categories" :key="i"
          @click="changeactive(i)"
          >
            <div class="nav-link">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- ref被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的$refs对象上。
          如果在普通的DOM元素上使用,引用指向的就是DOM元素;如果用在子组件上,引用就指向组件实例 -->
      <swiper ref="list" :options="{autoHeight:true}"
      @slide-change="()=>active=$refs.list.swiper.realIndex">
        <swiper-slide>
          <div>
            <div class="p-3 bg-white" style="border-bottom:1px solid #d4d9de">
              <div class="d-flex">
                <router-link tag="button" to="/" class="btn btn-lg flex-1">
                  <i class="iconfont icon-Menu"></i>
                  英雄介绍视频
                </router-link>
                <router-link tag="button" to="/" class="btn btn-lg flex-1 ml-2">
                  <i class="iconfont icon-Menu"></i>
                  一图识别英雄
                </router-link>
              </div> 
              <!-- skills -->
              <div class="skills mt-4">
                <div class="d-flex jc-around">
                  <img 
                  class="icon"
                  @click="currentSkillIndex = i"
                  :class="{active:currentSkillIndex===i}"
                  :src="item.icon"
                  v-for="(item,i) in model.skills"
                  :key="item.name" 
                  alt="">
                </div>
                <!-- 切换通过computed来实现,currentSkillIndex变化,currentSKill里面的内容也相应的变化 -->
                <div v-if="currentSkill">
                  <div class="d-flex pt-3 pb-3">
                    <h3 class="m-0">{{currentSkill.name}}</h3>
                    <span class="text-grey ml-4">
                      (冷却值:{{currentSkill.delay}})
                      消耗:{{currentSkill.cost}}
                    </span>
                  </div>
                  <div class="py-2">
                    {{currentSkill.description}}
                  </div>
                </div>
              </div>
            </div>
            <div class="equipment bg-white">
              <m-card title="出装推荐" icon="Menu">
                <div class="fx-xl">顺风出装</div>
                <div class="d-flex jc-around text-center">
                  <div v-for="(item,i) in model.sitems" :key="i">
                    <img :src="item.icon" class="icon" alt="">
                    <div class="fs-xs">{{item.name}}</div>
                  </div>
                </div>
                <hr>
                <div class="fx-xl">逆风出装</div>
                <div class="d-flex jc-around text-center">
                  <div v-for="(item,i) in model.nitems" :key="i">
                    <img :src="item.icon" class="icon" alt="">
                    <div class="fs-xs">{{item.name}}</div>
                  </div>
                </div>
              </m-card>
            </div>
             <m-card plain icon="Menu" title="使用技巧">
              <p class="m-0">{{model.usageTips}}</p>
            </m-card>
            <m-card plain icon="Menu" title="团战技巧">
              <p class="m-0">{{model.teamTips}}</p>
            </m-card>
            <m-card plain icon="Menu" title="对抗技巧">
              <p class="m-0">{{model.battleTips}}</p>
            </m-card>
            <m-card icon="Menu" title="英雄关系">
              <div class="fx-xl">最佳搭档</div>
              <div v-for="item in model.partners" :key="item.name"
              class="d-flex pt-3"
              >
              <img :src="item.hero.avatar" height="50">
                <p class="flex-1 m-0 ml-3">
                  {{item.description}}
                </p>
              </div>
            </m-card>
          </div>
        </swiper-slide>
        <swiper-slide>
         <div class="bg-white">
           <div class="mx-3">
             <div class="d-flex py-3" style="border-bottom:1px solid #d4d9de"
             v-for="n in 5" :key="n">
              <div>
                <img style="width:8.9231rem"
                  src="http://shp.qpic.cn/cfwebcap/759707493/2ad75193983b87102711a650dede3866/0/?width=230&height=140" alt="">
              </div>
              <!-- flex-column让主轴变成纵向的 justify-content:space-between沿着主轴方向的上下排列 -->
              <div class="d-flex flex-column jc-between w-100">
                <div class="px-3 text-dark fs-lg" style="font-weight:500">
                  [快速上手英雄技能]赵云
                </div>
                <div class="d-flex jc-between text-grey px-2">
                  <div>1483.4万</div>
                  <div>2017-12-15</div>
                </div>
              </div>
            </div>
           </div>
         </div>
         <div class="text-grey text-center pt-3 fs-xs">
           全部加载完成
         </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    id:{
      required:true
    }
  },
  data(){
    return {
      model:null,
      currentSkillIndex:0,
      categories:[{
        'name':'英雄初识'
      },{
        'name':'进阶攻略'
      }],
      active:0
    }
  },
  methods:{
    async fetchHeroesCats(){
      const res = await this.$http.get(`heroes/${this.id}`)
      console.log(res.data)
      this.model = res.data
    },
    changeactive(i){
      this.$refs.list.swiper.slideTo(i)
    }
  },
  computed:{
    currentSkill(){
      return this.model.skills[this.currentSkillIndex]
    }
  },
  created(){
    this.fetchHeroesCats()
  }
}
</script>

<style lang="less">
@import '../assets/less/variables.less';

.pg-hero {
  .topbar {
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .top {
    height: 50vw;
    background-color: #fff  !important;
    background-repeat: no-repeat  !important;
    background-position: top center  !important;
    background-size:auto 100% !important;
    .info {
      background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
      .scores {
        .badeg {
          margin: 0 0.35rem;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          border-radius: 50%;
          font-size: 0.6rem;
          border: 1px solid rgba(255,255,255,0.2);
        }
      }
    }
  }
  .skills {
      .icon {
        width: 5.3846rem;//70px
        height: 5.3846rem;
        border: 3px solid #fff;
        &.active {
          border-color: @primary;
        }
        border-radius: 50%;
      }
  }
  .equipment {
    .icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}

</style>