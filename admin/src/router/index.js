import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/categories/create',
        component:CategoryEdit
      },
      {
        path:'/categories/edit/:id',
        component:CategoryEdit,
        //如果 props 被设置为 true，route.params 将会被设置为组件属性。
        props:true
      },
      {
        path:'/categories/list',
        component:CategoryList
      },

      {
        path:'/items/create',
        component:ItemEdit
      },
      {
        path:'/items/edit/:id',
        component:ItemEdit,
        //如果 props 被设置为 true，route.params 将会被设置为组件属性。
        props:true
      },
      {
        path:'/items/list',
        component:ItemList
      },

      {
        path:'/heroes/create',
        component:HeroEdit
      },
      {
        path:'/heroes/edit/:id',
        component:HeroEdit,
        //如果 props 被设置为 true，route.params 将会被设置为组件属性。
        props:true
      },
      {
        path:'/heroes/list',
        component:HeroList
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
